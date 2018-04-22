"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moves = (board1, board2) => {
    return board1
        .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
        .reduce((a, b) => a.concat(b))
        .length;
};
exports.colorChoices = ['red', 'blue', 'green', 'yellow', 'magenta'];
exports.chooseRandomColor = () => exports.colorChoices[Math.floor(Math.random() * exports.colorChoices.length)];
//# sourceMappingURL=values.js.map