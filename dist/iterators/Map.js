"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
class Map {
    static map(matrix, callback) {
        const data = this.mapData(matrix, callback);
        return new Matrix_1.Matrix(data);
    }
    static mapData(matrix, callback) {
        const data = [];
        matrix.forEach((row, col, unit) => {
            data[row] = data[row] || [];
            data[row][col] = +callback(unit, row, col) || 0;
        });
        return data;
    }
}
exports.Map = Map;
//# sourceMappingURL=Map.js.map