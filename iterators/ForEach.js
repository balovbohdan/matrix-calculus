"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForEach = /** @class */ (function () {
    function ForEach() {
    }
    ForEach.start = function (matrix, callback) {
        var data = matrix.getData();
        var colsQty = matrix.getColsQty();
        var rowsQty = matrix.getRowsQty();
        for (var row = 0; row < rowsQty; row++)
            for (var col = 0; col < colsQty; col++)
                callback(row, col, data[row][col]);
    };
    return ForEach;
}());
exports.ForEach = ForEach;
