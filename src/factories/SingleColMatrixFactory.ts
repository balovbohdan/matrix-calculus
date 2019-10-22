import {Matrix} from '../Matrix';

export class SingleColMatrixFactory {
    static create(data:number[]) {
        const dataPrepared = data.map(n => [n]);

        return new Matrix(dataPrepared);
    }
}