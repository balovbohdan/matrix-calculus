import { Matrix } from '../Matrix';
/**
 * Adds these items:
 * 1. Matrix to matrix.
 * 2. Matrix to number.
 * 3. Number to matrix.
 */
export declare class Adder {
    static add(left: Matrix | number, right: Matrix | number): Matrix;
    private constructor();
    private add;
    private static sumMatrixToNumber;
    private static sumMatrices;
    private static checkData;
    private readonly left;
    private readonly right;
}
