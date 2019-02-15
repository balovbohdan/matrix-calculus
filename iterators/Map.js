"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../Matrix");
var Map = /** @class */ (function () {
    function Map() {
    }
    Map.map = function (matrix, callback) {
        var data = this.mapData(matrix, callback);
        return new Matrix_1.Matrix(data);
    };
    Map.mapData = function (matrix, callback) {
        var data = [];
        matrix.forEach(function (row, col, unit) {
            data[row] = data[row] || [];
            data[row][col] = +callback(unit, row, col) || 0;
        });
        return data;
    };
    return Map;
}());
exports.Map = Map;
