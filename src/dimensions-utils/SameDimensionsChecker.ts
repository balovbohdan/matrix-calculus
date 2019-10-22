import {Matrix, MatrixError} from '../Matrix';

export class SameDimensionsChecker {
    static checkStrict(left:Matrix, right:Matrix):void|never {
        const hasTheSameSize = this.check(left, right);

        if (hasTheSameSize) return;

        throw new MatrixError(`Matrices have different dimensions.`);
    }

    static check(left:Matrix, right:Matrix) {
        const leftRowsQty = left.getRowsQty();
        const leftColsQty = left.getColsQty();

        const rightRowsQty = right.getRowsQty();
        const rightColsQty = right.getColsQty();

        const isRowsQtyIdentical = leftRowsQty === rightRowsQty;
        const isColsQtyIdentical = leftColsQty === rightColsQty;

        return isRowsQtyIdentical && isColsQtyIdentical;
    }
}