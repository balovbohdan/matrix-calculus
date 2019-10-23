"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../../Matrix");
class MatrixToMatrix {
    constructor(left, right) {
        left.isCompatibleWithStrict(right);
        this.left = left;
        this.right = right;
    }
    static calc(left, right) {
        const calculator = new MatrixToMatrix(left, right);
        return calculator.calc();
    }
    calc() {
        const params = this.createParams();
        return this.doCalc(params);
    }
    createParams() {
        const leftData = this.left.getData();
        const leftRowsQty = this.left.getRowsQty();
        const rightColsQty = this.right.getColsQty();
        return {
            leftData,
            leftRowsQty,
            rightColsQty
        };
    }
    doCalc(params) {
        const { leftData, leftRowsQty, rightColsQty } = params;
        const data = [];
        for (let rightCol = 0; rightCol < rightColsQty; rightCol++) {
            for (let leftRow = 0; leftRow < leftRowsQty; leftRow++) {
                data[leftRow] = data[leftRow] || [];
                data[leftRow][rightCol] = this.sumLeftAndRight(leftData[leftRow], rightCol);
            }
        }
        return new Matrix_1.Matrix(data);
    }
    sumLeftAndRight(left, rightCol) {
        const callback = (prev, cur, row) => {
            const rightUnit = this.right.get(row, rightCol);
            return prev + cur * rightUnit;
        };
        return left.reduce(callback, 0);
    }
}
exports.MatrixToMatrix = MatrixToMatrix;
//# sourceMappingURL=MatrixToMatrix.js.map