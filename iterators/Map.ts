import {Matrix, Data} from '../Matrix';

export type Callback = (unit:number, row?:number, col?:number)=>number;

export class Map {
    static map(matrix:Matrix, callback:Callback):Matrix {
        const data = this.mapData(matrix, callback);

        return new Matrix(data);
    }

    static mapData(matrix:Matrix, callback:Callback):Data {
        const data:Data = [];

        matrix.forEach((row, col, unit) => {
            data[row] = data[row] || [];

            data[row][col] = +callback(unit, row, col) || 0;
        });

        return data;
    }
}