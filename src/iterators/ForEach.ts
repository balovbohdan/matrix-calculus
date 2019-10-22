import {Matrix} from '../Matrix';

export type Callback = (row:number, col:number, unit:number)=>void;

export class ForEach {
    static start(matrix:Matrix, callback:Callback) {
        const data = matrix.getData();

        const colsQty = matrix.getColsQty();
        const rowsQty = matrix.getRowsQty();

        for (let row = 0; row < rowsQty; row++)
            for (let col = 0; col < colsQty; col++)
                callback(row, col, data[row][col]);
    }
}