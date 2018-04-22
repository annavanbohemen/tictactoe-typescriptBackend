import { JsonController, Get, Param, Post, Put, HttpCode, Body, NotFoundError, BodyParam, BadRequestError } from 'routing-controllers'
import Game, { Color, Board } from './entity'
import { moves, chooseRandomColor } from './values';


@JsonController()
export default class GameController {

@Get('/games/:id([0-9]+)')
 getGame(
   @Param('id') id: number
 ) {
  return Game.findOne(id)
}

@Get('/games')                      //GET /games
async allGames() {
  const games = await Game.find()
  return { games }
}

/* 
3.
The created game should receive a random color out of these colors: 
red, blue, green, yellow, magenta. So every new game that gets created is assigned a random color. */

@Post('/games')
@HttpCode(201)
   async createGame(
       
       @Body() create: {'color': Color, 'name': 'new name', 'board': Board}
) { 
        create.color = chooseRandomColor()
        const gamecreated = await Game.create(create).save()

       return {gamecreated}
}


@Put('/games/:id')    
    async updateGame(
        @Param('id') id: number,
        @Body() update: {'color': Color, 'name': 'new name', 'board': Board} 
) {
            const game = await Game.findOne(id)
            if (!game) throw new NotFoundError('Cannot find game')

          if (!moves(game.board, update.board)) throw new BadRequestError(`Invalid move`)

        return Game.merge(game, update).save()
}


}



