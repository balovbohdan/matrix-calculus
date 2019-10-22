import { Matrix } from '../Matrix';
declare type Data = {
    matrix: Matrix;
    callback: Callback;
    initialValue: number;
};
export declare type Callback = (middleResult: number, unit: number, unitInd?: number, colData?: Array<number>) => number;
export declare class ColsReducer {
    static reduce(data: Data): number[];
}
export {};
