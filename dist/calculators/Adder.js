"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
/**
 * Adds these items:
 * 1. Matrix to matrix.
 * 2. Matrix to number.
 * 3. Number to matrix.
 */
class Adder {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    static add(left, right) {
        this.checkData(left, right);
        return (new Adder(left, right)).add();
    }
    add() {
        if (this.left instanceof Matrix_1.Matrix && this.right instanceof Matrix_1.Matrix)
            return Adder.sumMatrices(this.left, this.right);
        if (this.left instanceof Matrix_1.Matrix && typeof this.right === 'number')
            return Adder.sumMatrixToNumber(this.right, this.left);
        if (this.right instanceof Matrix_1.Matrix && typeof this.left === 'number')
            return Adder.sumMatrixToNumber(this.left, this.right);
        throw new AdderError(`Failed to sum matrices. Types resolving error happened.`, this.left, this.right);
    }
    static sumMatrixToNumber(n, matrix) {
        return matrix.mutate(item => item + n);
    }
    static sumMatrices(left, right) {
        left.hasTheSameDimensionsStrict(right);
        const rightData = right.getData();
        const resultData = [];
        left.forEach((row, col, item) => {
            resultData[row] = resultData[row] || [];
            resultData[row][col] = item + rightData[row][col];
        });
        return new Matrix_1.Matrix(resultData);
    }
    static checkData(left, right) {
        const leftAndRightAreNumbers = typeof left === 'number' && typeof right === 'number';
        if (!leftAndRightAreNumbers)
            return;
        throw new AdderError(`Failed to sum matrices. Got numbers from left and right sides.`, left, right);
    }
}
exports.Adder = Adder;
class AdderError extends Error {
    constructor(message, left, right) {
        super(message);
        this.left = left;
        this.right = right;
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
//# sourceMappingURL=Adder.js.map