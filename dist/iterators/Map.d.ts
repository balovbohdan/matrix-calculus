import { Matrix, Data } from '../Matrix';
export declare type Callback = (unit: number, row: number, col: number) => number;
export declare class Map {
    static map(matrix: Matrix, callback: Callback): Matrix;
    static mapData(matrix: Matrix, callback: Callback): Data;
}
