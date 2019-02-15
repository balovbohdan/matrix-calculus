"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = require("../Matrix");
var SameDimensionsChecker = /** @class */ (function () {
    function SameDimensionsChecker() {
    }
    SameDimensionsChecker.checkStrict = function (left, right) {
        var hasTheSameSize = this.check(left, right);
        if (hasTheSameSize)
            return;
        throw new Matrix_1.MatrixError("Matrices have different dimensions.");
    };
    SameDimensionsChecker.check = function (left, right) {
        var leftRowsQty = left.getRowsQty();
        var leftColsQty = left.getColsQty();
        var rightRowsQty = right.getRowsQty();
        var rightColsQty = right.getColsQty();
        var isRowsQtyIdentical = leftRowsQty === rightRowsQty;
        var isColsQtyIdentical = leftColsQty === rightColsQty;
        return isRowsQtyIdentical && isColsQtyIdentical;
    };
    return SameDimensionsChecker;
}());
exports.SameDimensionsChecker = SameDimensionsChecker;
