"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColsReducer = (function () {
    function ColsReducer() {
    }
    ColsReducer.reduce = function (data) {
        var matrix = data.matrix, callback = data.callback, initialValue = data.initialValue;
        var cols = matrix.getCols();
        return cols.map(function (col) {
            return col.reduce(callback, initialValue);
        });
    };
    return ColsReducer;
}());
exports.ColsReducer = ColsReducer;
