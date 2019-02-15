"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../../Matrix");
var MatrixToMatrix = /** @class */ (function () {
    function MatrixToMatrix(left, right) {
        left.isCompatibleWithStrict(right);
        this.left = left;
        this.right = right;
    }
    MatrixToMatrix.calc = function (left, right) {
        var calculator = new MatrixToMatrix(left, right);
        return calculator.calc();
    };
    MatrixToMatrix.prototype.calc = function () {
        var params = this.createParams();
        return this.doCalc(params);
    };
    MatrixToMatrix.prototype.createParams = function () {
        var leftData = this.left.getData();
        var leftRowsQty = this.left.getRowsQty();
        var rightColsQty = this.right.getColsQty();
        return {
            leftData: leftData,
            leftRowsQty: leftRowsQty,
            rightColsQty: rightColsQty
        };
    };
    MatrixToMatrix.prototype.doCalc = function (params) {
        var leftData = params.leftData, leftRowsQty = params.leftRowsQty, rightColsQty = params.rightColsQty;
        var data = [];
        for (var rightCol = 0; rightCol < rightColsQty; rightCol++) {
            for (var leftRow = 0; leftRow < leftRowsQty; leftRow++) {
                data[leftRow] = data[leftRow] || [];
                data[leftRow][rightCol] = this.sumLeftAndRight(leftData[leftRow], rightCol);
            }
        }
        return new Matrix_1.Matrix(data);
    };
    MatrixToMatrix.prototype.sumLeftAndRight = function (left, rightCol) {
        var _this = this;
        var callback = function (prev, cur, row) {
            var rightUnit = _this.right.get(row, rightCol);
            return prev + cur * rightUnit;
        };
        return left.reduce(callback, 0);
    };
    return MatrixToMatrix;
}());
exports.MatrixToMatrix = MatrixToMatrix;
