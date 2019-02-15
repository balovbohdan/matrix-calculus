"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../../Matrix");
var MatrixToMatrix_1 = require("./MatrixToMatrix");
var MatrixToNumber_1 = require("./MatrixToNumber");
/**
 * Multiplies these items:
 * 1. Matrix to matrix.
 * 2. Number to matrix.
 * 3. Matrix to number.
 */
var Multiplicator = /** @class */ (function () {
    function Multiplicator(left, right) {
        Multiplicator.checkData(left, right);
        this.left = left;
        this.right = right;
    }
    Multiplicator.multiply = function (left, right) {
        var multiplicator = new Multiplicator(left, right);
        return multiplicator.multiply();
    };
    Multiplicator.prototype.multiply = function () {
        if (this.left instanceof Matrix_1.Matrix && typeof this.right === 'number')
            return Multiplicator.matrixToNumber(this.left, this.right);
        if (typeof this.left === 'number' && this.right instanceof Matrix_1.Matrix)
            return Multiplicator.matrixToNumber(this.right, this.left);
        if (this.left instanceof Matrix_1.Matrix && this.right instanceof Matrix_1.Matrix)
            return Multiplicator.matrixToMatrix(this.left, this.right);
        throw new MultiplicatorError("Failed to multiply matrices. Types resolving error happened.", this.left, this.right);
    };
    Multiplicator.matrixToMatrix = function (left, right) {
        return MatrixToMatrix_1.MatrixToMatrix.calc(left, right);
    };
    Multiplicator.matrixToNumber = function (matrix, number) {
        return MatrixToNumber_1.MatrixToNumber.calc(matrix, number);
    };
    Multiplicator.checkData = function (left, right) {
        var isLeftAndRightAreNumbers = typeof left === 'number' && typeof right === 'number';
        if (!isLeftAndRightAreNumbers)
            return;
        throw new MultiplicatorError("Failed to multiply matrices. Got numbers from left and right sides.", left, right);
    };
    return Multiplicator;
}());
exports.Multiplicator = Multiplicator;
var MultiplicatorError = /** @class */ (function (_super) {
    __extends(MultiplicatorError, _super);
    function MultiplicatorError(message, left, right) {
        var _this = _super.call(this, message) || this;
        _this.left = left;
        _this.right = right;
        _this.message = message;
        _this.stack = (new Error()).stack;
        return _this;
    }
    return MultiplicatorError;
}(Error));
