"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
class SameDimensionsChecker {
    static checkStrict(left, right) {
        const hasTheSameSize = this.check(left, right);
        if (hasTheSameSize)
            return;
        throw new Matrix_1.MatrixError(`Matrices have different dimensions.`);
    }
    static check(left, right) {
        const leftRowsQty = left.getRowsQty();
        const leftColsQty = left.getColsQty();
        const rightRowsQty = right.getRowsQty();
        const rightColsQty = right.getColsQty();
        const isRowsQtyIdentical = leftRowsQty === rightRowsQty;
        const isColsQtyIdentical = leftColsQty === rightColsQty;
        return isRowsQtyIdentical && isColsQtyIdentical;
    }
}
exports.SameDimensionsChecker = SameDimensionsChecker;
//# sourceMappingURL=SameDimensionsChecker.js.map