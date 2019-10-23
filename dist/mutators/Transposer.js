"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
class Transposer {
    static transpose(matrix) {
        const data = [];
        matrix.forEach((row, col, unit) => {
            data[col] = data[col] || [];
            data[col][row] = unit;
        });
        return new Matrix_1.Matrix(data);
    }
}
exports.Transposer = Transposer;
//# sourceMappingURL=Transposer.js.map