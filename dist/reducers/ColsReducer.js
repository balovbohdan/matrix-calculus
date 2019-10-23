"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ColsReducer {
    static reduce(data) {
        const { matrix, callback, initialValue } = data;
        const cols = matrix.getCols();
        return cols.map(col => col.reduce(callback, initialValue));
    }
}
exports.ColsReducer = ColsReducer;
//# sourceMappingURL=ColsReducer.js.map