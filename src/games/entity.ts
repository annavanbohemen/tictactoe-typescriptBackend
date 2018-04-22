import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'

const startBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
	["o", "o", "o"]
]

export type Board = [
	["o", "o", "o"],
	["o", "o", "o"],
	["o", "o", "o"]
]
export type Color = 'red' | 'blue' | 'green' | 'yellow' | 'magenta'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsString()
  @Column('text') 
  color: Color

  @Column('json', {default: startBoard})
  board: Board
}