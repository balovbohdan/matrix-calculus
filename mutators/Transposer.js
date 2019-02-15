"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../Matrix");
var Transposer = /** @class */ (function () {
    function Transposer() {
    }
    Transposer.transpose = function (matrix) {
        var data = [];
        matrix.forEach(function (row, col, unit) {
            data[col] = data[col] || [];
            data[col][row] = unit;
        });
        return new Matrix_1.Matrix(data);
    };
    return Transposer;
}());
exports.Transposer = Transposer;
