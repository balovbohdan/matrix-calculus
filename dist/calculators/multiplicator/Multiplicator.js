"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../../Matrix");
const MatrixToMatrix_1 = require("./MatrixToMatrix");
const MatrixToNumber_1 = require("./MatrixToNumber");
/**
 * Multiplies these items:
 * 1. Matrix to matrix.
 * 2. Number to matrix.
 * 3. Matrix to number.
 */
class Multiplicator {
    constructor(left, right) {
        Multiplicator.checkData(left, right);
        this.left = left;
        this.right = right;
    }
    static multiply(left, right) {
        const multiplicator = new Multiplicator(left, right);
        return multiplicator.multiply();
    }
    multiply() {
        if (this.left instanceof Matrix_1.Matrix && typeof this.right === 'number')
            return Multiplicator.matrixToNumber(this.left, this.right);
        if (typeof this.left === 'number' && this.right instanceof Matrix_1.Matrix)
            return Multiplicator.matrixToNumber(this.right, this.left);
        if (this.left instanceof Matrix_1.Matrix && this.right instanceof Matrix_1.Matrix)
            return Multiplicator.matrixToMatrix(this.left, this.right);
        throw new MultiplicatorError(`Failed to multiply matrices. Types resolving error happened.`, this.left, this.right);
    }
    static matrixToMatrix(left, right) {
        return MatrixToMatrix_1.MatrixToMatrix.calc(left, right);
    }
    static matrixToNumber(matrix, number) {
        return MatrixToNumber_1.MatrixToNumber.calc(matrix, number);
    }
    static checkData(left, right) {
        const isLeftAndRightAreNumbers = typeof left === 'number' && typeof right === 'number';
        if (!isLeftAndRightAreNumbers)
            return;
        throw new MultiplicatorError(`Failed to multiply matrices. Got numbers from left and right sides.`, left, right);
    }
}
exports.Multiplicator = Multiplicator;
class MultiplicatorError extends Error {
    constructor(message, left, right) {
        super(message);
        this.left = left;
        this.right = right;
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
//# sourceMappingURL=Multiplicator.js.map