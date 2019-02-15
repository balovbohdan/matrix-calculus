import {Matrix} from '../Matrix';

type Data = {
    matrix:Matrix;
    callback:Callback;
    initialValue:number;
};

export type Callback = (middleResult:number, unit:number, unitInd?:number, colData?:Array<number>)=>number;

export class ColsReducer {
    static reduce(data:Data) {
        const {matrix, callback, initialValue} = data;

        const cols = matrix.getCols();

        return cols.map(col =>
            col.reduce(callback, initialValue)
        );
    }
}