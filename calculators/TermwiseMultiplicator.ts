import {Matrix, Data} from '../Matrix';

export class TermwiseMultiplicator {
    static multiply(multiplicand:Matrix, factor:Matrix|number):Matrix {
        return factor instanceof Matrix
            ? this.matrixToMatrix(multiplicand, factor)
            : this.matrixToNumber(multiplicand, factor);
    }

    private static matrixToNumber(multiplicand:Matrix, factor:number) {
        return multiplicand.multiply(factor);
    }

    private static matrixToMatrix(multiplicand:Matrix, factor:Matrix) {
        multiplicand.hasTheSameDimensionsStrict(factor);

        const factorData = factor.getData();

        const data:Data = [];

        multiplicand.forEach((row, col, item) => {
            data[row] = data[row] || [];
            data[row][col] = item * factorData[row][col];
        });

        return new Matrix(data);
    }
}