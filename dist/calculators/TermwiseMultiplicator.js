"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
class TermwiseMultiplicator {
    static multiply(multiplicand, factor) {
        return factor instanceof Matrix_1.Matrix
            ? this.matrixToMatrix(multiplicand, factor)
            : this.matrixToNumber(multiplicand, factor);
    }
    static matrixToNumber(multiplicand, factor) {
        return multiplicand.multiply(factor);
    }
    static matrixToMatrix(multiplicand, factor) {
        multiplicand.hasTheSameDimensionsStrict(factor);
        const factorData = factor.getData();
        const data = [];
        multiplicand.forEach((row, col, item) => {
            data[row] = data[row] || [];
            data[row][col] = item * factorData[row][col];
        });
        return new Matrix_1.Matrix(data);
    }
}
exports.TermwiseMultiplicator = TermwiseMultiplicator;
//# sourceMappingURL=TermwiseMultiplicator.js.map