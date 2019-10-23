"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../../Matrix");
class MatrixToNumber {
    static calc(matrix, number) {
        const data = [];
        matrix.forEach((row, col, item) => {
            data[row] = data[row] || [];
            data[row][col] = item * number;
        });
        return new Matrix_1.Matrix(data);
    }
}
exports.MatrixToNumber = MatrixToNumber;
//# sourceMappingURL=MatrixToNumber.js.map