import {Matrix} from '../Matrix';

type Data = {
    matrix:Matrix;
    callback:Callback;
    initialValue:number;
};

type Callback = (middleResult:number, unit:number, unitInd?:number, rowData?:Array<number>)=>number;

export class RowsReducer {
    static reduce(data:Data) {
        const {matrix, callback, initialValue} = data;

        const rows = matrix.getRows();

        return rows.map(row =>
            row.reduce(callback, initialValue)
        );
    }
}