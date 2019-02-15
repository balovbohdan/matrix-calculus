"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_utils_1 = require("../../math-utils");
var SingleColMatrixFactory = (function () {
    function SingleColMatrixFactory() {
    }
    SingleColMatrixFactory.create = function (data) {
        var dataPrepared = data.map(function (n) { return [n]; });
        return new math_utils_1.Matrix(dataPrepared);
    };
    return SingleColMatrixFactory;
}());
exports.SingleColMatrixFactory = SingleColMatrixFactory;
