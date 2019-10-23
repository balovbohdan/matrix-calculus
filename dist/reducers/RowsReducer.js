"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RowsReducer {
    static reduce(data) {
        const { matrix, callback, initialValue } = data;
        const rows = matrix.getRows();
        return rows.map(row => row.reduce(callback, initialValue));
    }
}
exports.RowsReducer = RowsReducer;
//# sourceMappingURL=RowsReducer.js.map