"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../Matrix");
var TermwiseMultiplicator = /** @class */ (function () {
    function TermwiseMultiplicator() {
    }
    TermwiseMultiplicator.multiply = function (multiplicand, factor) {
        return factor instanceof Matrix_1.Matrix
            ? this.matrixToMatrix(multiplicand, factor)
            : this.matrixToNumber(multiplicand, factor);
    };
    TermwiseMultiplicator.matrixToNumber = function (multiplicand, factor) {
        return multiplicand.multiply(factor);
    };
    TermwiseMultiplicator.matrixToMatrix = function (multiplicand, factor) {
        multiplicand.hasTheSameDimensionsStrict(factor);
        var factorData = factor.getData();
        var data = [];
        multiplicand.forEach(function (row, col, item) {
            data[row] = data[row] || [];
            data[row][col] = item * factorData[row][col];
        });
        return new Matrix_1.Matrix(data);
    };
    return TermwiseMultiplicator;
}());
exports.TermwiseMultiplicator = TermwiseMultiplicator;
