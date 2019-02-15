import {Matrix, Data} from '../Matrix';

/**
 * Creates matrix with the same unit all over the grid.
 */
export class UnitMatrixFactory {
    static create(rowsNum:number, colsNum:number, unit:number) {
        const colsFillData = (new Array(colsNum)).fill(unit);
        const data:Data = (new Array(rowsNum)).fill(colsFillData);

        return new Matrix(data);
    }
}