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
var Matrix_1 = require("../Matrix");
/**
 * Adds these items:
 * 1. Matrix to matrix.
 * 2. Matrix to number.
 * 3. Number to matrix.
 */
var Adder = /** @class */ (function () {
    function Adder(left, right) {
        this.left = left;
        this.right = right;
    }
    Adder.add = function (left, right) {
        this.checkData(left, right);
        return (new Adder(left, right)).add();
    };
    Adder.prototype.add = function () {
        if (this.left instanceof Matrix_1.Matrix && this.right instanceof Matrix_1.Matrix)
            return Adder.sumMatrices(this.left, this.right);
        if (this.left instanceof Matrix_1.Matrix && typeof this.right === 'number')
            return Adder.sumMatrixToNumber(this.right, this.left);
        if (this.right instanceof Matrix_1.Matrix && typeof this.left === 'number')
            return Adder.sumMatrixToNumber(this.left, this.right);
        throw new AdderError("Failed to sum matrices. Types resolving error happened.", this.left, this.right);
    };
    Adder.sumMatrixToNumber = function (n, matrix) {
        return matrix.mutate(function (item) { return item + n; });
    };
    Adder.sumMatrices = function (left, right) {
        left.hasTheSameDimensionsStrict(right);
        var rightData = right.getData();
        var resultData = [];
        left.forEach(function (row, col, item) {
            resultData[row] = resultData[row] || [];
            resultData[row][col] = item + rightData[row][col];
        });
        return new Matrix_1.Matrix(resultData);
    };
    Adder.checkData = function (left, right) {
        var leftAndRightAreNumbers = typeof left === 'number' && typeof right === 'number';
        if (!leftAndRightAreNumbers)
            return;
        throw new AdderError("Failed to sum matrices. Got numbers from left and right sides.", left, right);
    };
    return Adder;
}());
exports.Adder = Adder;
var AdderError = /** @class */ (function (_super) {
    __extends(AdderError, _super);
    function AdderError(message, left, right) {
        var _this = _super.call(this, message) || this;
        _this.left = left;
        _this.right = right;
        _this.message = message;
        _this.stack = (new Error()).stack;
        return _this;
    }
    return AdderError;
}(Error));
