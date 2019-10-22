import {Matrix, Data} from '../Matrix';

/**
 * Adds these items:
 * 1. Matrix to matrix.
 * 2. Matrix to number.
 * 3. Number to matrix.
 */
export class Adder {
    static add(left:Matrix|number, right:Matrix|number):Matrix {
        this.checkData(left, right);

        return (new Adder(left, right)).add();
    }

    private constructor(left:Matrix|number, right:Matrix|number) {
        this.left = left;
        this.right = right;
    }

    private add():Matrix {
        if (this.left instanceof Matrix && this.right instanceof Matrix)
            return Adder.sumMatrices(this.left, this.right);

        if (this.left instanceof Matrix && typeof this.right === 'number')
            return Adder.sumMatrixToNumber(this.right, this.left);

        if (this.right instanceof Matrix && typeof this.left === 'number')
            return Adder.sumMatrixToNumber(this.left, this.right);

        throw new AdderError(
            `Failed to sum matrices. Types resolving error happened.`,
            this.left,
            this.right
        );
    }

    private static sumMatrixToNumber(n:number, matrix:Matrix):Matrix {
        return matrix.mutate(item => item + n);
    }

    private static sumMatrices(left:Matrix, right:Matrix):Matrix {
        left.hasTheSameDimensionsStrict(right);

        const rightData = right.getData();

        const resultData:Data = [];

        left.forEach((row, col, item) => {
            resultData[row] = resultData[row] || [];
            resultData[row][col] = item + rightData[row][col];
        });

        return new Matrix(resultData);
    }

    private static checkData(left:Matrix|number, right:Matrix|number):void|never {
        const leftAndRightAreNumbers = typeof left === 'number' && typeof right === 'number';

        if (!leftAndRightAreNumbers) return;

        throw new AdderError(
            `Failed to sum matrices. Got numbers from left and right sides.`,
            left,
            right
        );
    }

    private readonly left:Matrix|number;
    private readonly right:Matrix|number;
}

class AdderError extends Error {
    constructor(message:string, left:Matrix|number, right:Matrix|number) {
        super(message);

        this.left = left;
        this.right = right;
        this.message = message;
        this.stack = (new Error()).stack;
    }

    readonly message:string;
    readonly stack:string|undefined;

    readonly left:Matrix|number;
    readonly right:Matrix|number;
}