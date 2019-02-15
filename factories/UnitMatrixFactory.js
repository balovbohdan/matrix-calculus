"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../Matrix");
var UnitMatrixFactory = (function () {
    function UnitMatrixFactory() {
    }
    UnitMatrixFactory.create = function (rowsNum, colsNum, unit) {
        var colsFillData = (new Array(colsNum)).fill(unit);
        var data = (new Array(rowsNum)).fill(colsFillData);
        return new Matrix_1.Matrix(data);
    };
    return UnitMatrixFactory;
}());
exports.UnitMatrixFactory = UnitMatrixFactory;
