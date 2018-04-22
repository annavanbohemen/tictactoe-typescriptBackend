import { Color } from "./entity";

export const moves = (board1, board2) => 
                board1
                    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
                    .reduce((a, b) => a.concat(b))
                    .length


const colorChoices: Array<Color> = ['red', 'blue', 'green', 'yellow', 'magenta'];
export const chooseRandomColor = () => colorChoices[Math.floor(Math.random() * colorChoices.length)];
