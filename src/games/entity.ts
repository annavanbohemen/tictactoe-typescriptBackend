import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, ValidateNested, IsIn } from 'class-validator'
import { colorChoices } from './values';

const startBoard = [
	["o", "o", "o"],
	["o", "o", "o"],
	["o", "o", "o"]
]

export type Square = null | 'x' | 'o'

export type Board = Square[][]

export type Color = 'red' | 'blue' | 'green' | 'yellow' | 'magenta'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsString()
  @IsIn(colorChoices)  
  @Column('text') 
  color: Color

  @ValidateNested()
  @Column('json', {default: startBoard})
  board: Board
}