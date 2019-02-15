import {Data, Matrix} from '../../Matrix';

export class MatrixToNumber {
    static calc(matrix:Matrix, number:number) {
        const data:Data = [];

        matrix.forEach((row, col, item) => {
            data[row] = data[row] || [];
            data[row][col] = item * number;
        });

        return new Matrix(data);
    }
}