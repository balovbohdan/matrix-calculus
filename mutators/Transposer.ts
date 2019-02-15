import {Data, Matrix} from '../Matrix';

export class Transposer {
    static transpose(matrix:Matrix):Matrix {
        const data:Data = [];

        matrix.forEach((row, col, unit) => {
            data[col] = data[col] || [];
            data[col][row] = unit;
        });

        return new Matrix(data);
    }
}