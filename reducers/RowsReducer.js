"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RowsReducer = (function () {
    function RowsReducer() {
    }
    RowsReducer.reduce = function (data) {
        var matrix = data.matrix, callback = data.callback, initialValue = data.initialValue;
        var rows = matrix.getRows();
        return rows.map(function (row) {
            return row.reduce(callback, initialValue);
        });
    };
    return RowsReducer;
}());
exports.RowsReducer = RowsReducer;
