import { Matrix } from '../../Matrix';
/**
 * Multiplies these items:
 * 1. Matrix to matrix.
 * 2. Number to matrix.
 * 3. Matrix to number.
 */
export declare class Multiplicator {
    static multiply(left: Matrix | number, right: Matrix | number): Matrix;
    private constructor();
    private multiply;
    private static matrixToMatrix;
    private static matrixToNumber;
    private static checkData;
    private readonly left;
    private readonly right;
}
