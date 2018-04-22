"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moves = (board1, board2) => board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length;
const colorChoices = ['red', 'blue', 'green', 'yellow', 'magenta'];
exports.chooseRandomColor = () => colorChoices[Math.floor(Math.random() * colorChoices.length)];
//# sourceMappingURL=values.js.map