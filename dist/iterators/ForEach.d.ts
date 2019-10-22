import { Matrix } from '../Matrix';
export declare type Callback = (row: number, col: number, unit: number) => void;
export declare class ForEach {
    static start(matrix: Matrix, callback: Callback): void;
}
