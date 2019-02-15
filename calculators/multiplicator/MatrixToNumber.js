"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../../Matrix");
var MatrixToNumber = /** @class */ (function () {
    function MatrixToNumber() {
    }
    MatrixToNumber.calc = function (matrix, number) {
        var data = [];
        matrix.forEach(function (row, col, item) {
            data[row] = data[row] || [];
            data[row][col] = item * number;
        });
        return new Matrix_1.Matrix(data);
    };
    return MatrixToNumber;
}());
exports.MatrixToNumber = MatrixToNumber;
