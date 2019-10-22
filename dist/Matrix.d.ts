import { Callback as MapCallback } from './iterators/Map';
import { Callback as ForEachCallback } from './iterators/ForEach';
import { Callback as ColsReducerCallback } from './reducers/ColsReducer';
export declare type Data = Array<Array<number>>;
export declare class Matrix {
    constructor(data?: Data);
    hasTheSameDimensionsStrict(matrix: Matrix): void | never;
    hasTheSameDimensions(matrix: Matrix): boolean;
    reduceCols(callback: ColsReducerCallback, initialValue: number): number[];
    getUnitsQty(): number;
    isCompatibleWithStrict(matrix: Matrix): Matrix | never;
    isCompatibleWith(matrix: Matrix): boolean;
    getUnitsSum(): number;
    multiply(rightItem: Matrix | number): Matrix;
    divideTermByTerm(divider: Matrix | number): Matrix;
    multiplyTermByTerm(factor: Matrix | number): Matrix;
    getClone(): Matrix;
    get(row: number, col: number): number;
    getRows(): Data;
    getCols(): Data;
    minus(subtrahend: Matrix | number): Matrix;
    plus(addend: Matrix | number): Matrix;
    sum(addend: Matrix | number): Matrix;
    pow(exponent: number): Matrix;
    inverseSigns(): Matrix;
    transpose(): Matrix;
    forEach(callback: ForEachCallback): void;
    getRowsQty(): number;
    getColsQty(): number;
    /**
     * Returns matrix data as plain (one-dimensional) array.
     */
    getPlainData(): number[];
    getData(): Data;
    mutate(callback: MapCallback): Matrix;
    private map;
    private mapData;
    private static prepareData;
    private readonly data;
}
export declare class MatrixError extends Error {
    constructor(message: string);
    readonly message: string;
    readonly stack: string | undefined;
}
