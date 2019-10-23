"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
/**
 * Creates matrix with the same unit all over the grid.
 */
class UnitMatrixFactory {
    static create(rowsNum, colsNum, unit) {
        const colsFillData = (new Array(colsNum)).fill(unit);
        const data = (new Array(rowsNum)).fill(colsFillData);
        return new Matrix_1.Matrix(data);
    }
}
exports.UnitMatrixFactory = UnitMatrixFactory;
//# sourceMappingURL=UnitMatrixFactory.js.map