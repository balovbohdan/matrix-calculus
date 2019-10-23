"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForEach {
    static start(matrix, callback) {
        const data = matrix.getData();
        const colsQty = matrix.getColsQty();
        const rowsQty = matrix.getRowsQty();
        for (let row = 0; row < rowsQty; row++)
            for (let col = 0; col < colsQty; col++)
                callback(row, col, data[row][col]);
    }
}
exports.ForEach = ForEach;
//# sourceMappingURL=ForEach.js.map