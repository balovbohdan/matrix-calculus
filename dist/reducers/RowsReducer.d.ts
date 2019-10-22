import { Matrix } from '../Matrix';
declare type Data = {
    matrix: Matrix;
    callback: Callback;
    initialValue: number;
};
declare type Callback = (middleResult: number, unit: number, unitInd?: number, rowData?: Array<number>) => number;
export declare class RowsReducer {
    static reduce(data: Data): number[];
}
export {};
