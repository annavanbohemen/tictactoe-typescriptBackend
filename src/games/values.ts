import { Color, Board } from "./entity";


export const moves = (board1: Board, board2: Board) => {
                return board1
                    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
                    .reduce((a, b) => a.concat(b))
                    .length
}


export const colorChoices: Array<Color> = ['red', 'blue', 'green', 'yellow', 'magenta'];
export const chooseRandomColor = () => colorChoices[Math.floor(Math.random() * colorChoices.length)];

