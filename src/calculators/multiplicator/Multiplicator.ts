import {Matrix} from '../../Matrix';

import {MatrixToMatrix} from './MatrixToMatrix';
import {MatrixToNumber} from './MatrixToNumber';

/**
 * Multiplies these items:
 * 1. Matrix to matrix.
 * 2. Number to matrix.
 * 3. Matrix to number.
 */
export class Multiplicator {
    static multiply(left:Matrix|number, right:Matrix|number):Matrix {
        const multiplicator = new Multiplicator(left, right);

        return multiplicator.multiply();
    }

    private constructor(left:Matrix|number, right:Matrix|number) {
        Multiplicator.checkData(left, right);

        this.left = left;
        this.right = right;
    }

    private multiply():Matrix {
        if (this.left instanceof Matrix && typeof this.right === 'number')
            return Multiplicator.matrixToNumber(this.left, this.right);

        if (typeof this.left === 'number' && this.right instanceof Matrix)
            return Multiplicator.matrixToNumber(this.right, this.left);

        if (this.left instanceof Matrix && this.right instanceof Matrix)
            return Multiplicator.matrixToMatrix(this.left, this.right);

        throw new MultiplicatorError(
            `Failed to multiply matrices. Types resolving error happened.`,
            this.left,
            this.right
        );
    }

    private static matrixToMatrix(left:Matrix, right:Matrix):Matrix {
        return MatrixToMatrix.calc(left, right);
    }

    private static matrixToNumber(matrix:Matrix, number:number):Matrix {
        return MatrixToNumber.calc(matrix, number);
    }

    private static checkData(left:Matrix|number, right:Matrix|number):void|never {
        const isLeftAndRightAreNumbers = typeof left === 'number' && typeof right === 'number';

        if (!isLeftAndRightAreNumbers) return;

        throw new MultiplicatorError(
            `Failed to multiply matrices. Got numbers from left and right sides.`,
            left,
            right
        );
    }

    private readonly left:Matrix|number;
    private readonly right:Matrix|number;
}

class MultiplicatorError extends Error {
    constructor(message:string, left:Matrix|number, right:Matrix|number) {
        super(message);

        this.left = left;
        this.right = right;

        this.message = message;
        this.stack = (new Error()).stack;
    }

    readonly left:Matrix|number;
    readonly right:Matrix|number;

    readonly message:string;
    readonly stack:string|undefined;
}