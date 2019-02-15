import {ArrayUtils} from './lib';
import {Transposer} from './mutators';
import {DataPreparer} from './DataPreparer';
import {SameDimensionsChecker} from './dimensions-utils';

import {Map, Callback as MapCallback} from './iterators/Map';
import {ForEach, Callback as ForEachCallback} from './iterators/ForEach';

import {ColsReducer, Callback as ColsReducerCallback} from './reducers/ColsReducer';

import {
    Adder,
    Multiplicator,
    TermwiseDivider,
    TermwiseMultiplicator
} from './calculators';

export type Data = Array<Array<number>>;

export class Matrix {
    constructor(data?:Data) {
        this.data = Matrix.prepareData(data);
    }

    hasTheSameDimensionsStrict(matrix:Matrix):void|never {
        SameDimensionsChecker.checkStrict(this, matrix);
    }

    hasTheSameDimensions(matrix:Matrix):boolean {
        return SameDimensionsChecker.check(this, matrix);
    }

    reduceCols(callback:ColsReducerCallback, initialValue:number) {
        return ColsReducer.reduce({
            callback,
            initialValue,
            matrix: this
        });
    }

    getUnitsQty() {
        const colsQty = this.getColsQty();
        const rowsQty = this.getRowsQty();

        return colsQty * rowsQty;
    }

    isCompatibleWithStrict(matrix:Matrix):Matrix|never {
        const isCompatible = this.isCompatibleWith(matrix);

        if (isCompatible)
            return this;

        throw new MatrixError(`Matrices are not compatible.`);
    }

    isCompatibleWith(matrix:Matrix):boolean {
        const colsQty = this.getColsQty();
        const rowsQty = matrix.getRowsQty();

        return colsQty === rowsQty;
    }

    getUnitsSum():number {
        const units = this.getPlainData();

        return units
            .reduce((prev, cur) => prev + cur, 0);
    }

    multiply(factor:Matrix|number):Matrix {
        return Multiplicator.multiply(this, factor);
    }

    divideTermByTerm(divider:Matrix|number):Matrix {
        return TermwiseDivider.divide(this, divider);
    }

    multiplyTermByTerm(factor:Matrix|number):Matrix {
        return TermwiseMultiplicator.multiply(this, factor);
    }

    getClone():Matrix {
        const data = this.getData();

        return new Matrix(data);
    }

    get(row:number, col:number):number {
        return this.data[row][col];
    }

    getRows():Data {
        return this.getData();
    }

    getCols():Data {
        return this.transpose().getData();
    }

    minus(subtrahend:Matrix|number):Matrix {
        const invertedSubtrahend = typeof subtrahend === 'number'
            ? -subtrahend
            : subtrahend.inverseSigns();

        return this.sum(invertedSubtrahend);
    }

    plus(addend:Matrix|number):Matrix {
        return this.sum(addend);
    }

    sum(addend:Matrix|number):Matrix {
        return Adder.add(this, addend);
    }

    pow(exponent:number):Matrix {
        return this.mutate(unit =>
            Math.pow(unit, exponent)
        );
    }

    inverseSigns():Matrix {
        return this.mutate(unit => -1 * unit);
    }

    transpose():Matrix {
        return Transposer.transpose(this);
    }

    forEach(callback:ForEachCallback) {
        ForEach.start(this, callback);
    }

    getRowsQty() {
        return this.data.length;
    }

    getColsQty() {
        try {
            const cols = this.data[0];

            return cols ? cols.length : 0;
        } catch (e) {
            return 0;
        }
    }

    /**
     * Returns matrix data as plain (one-dimensional) array.
     */
    getPlainData():number[] {
        const units:Array<number> = [];

        this.mapData(unit =>
            units.push(unit)
        );

        return units;
    }

    getData():Data {
        return ArrayUtils.getClone(this.data);
    }

    mutate(callback:MapCallback):Matrix {
        return this.map(callback);
    }

    private map(callback:MapCallback):Matrix {
        return Map.map(this, callback);
    }

    private mapData(callback:MapCallback):Data {
        return Map.mapData(this, callback);
    }

    private static prepareData(data?:Data):Data {
        return DataPreparer.prepare(data);
    }

    private readonly data:Data;
}

export class MatrixError extends Error {
    constructor(message:string) {
        super(message);

        this.message = message;
        this.stack = (new Error()).stack;
    }

    readonly message:string;
    readonly stack:string|undefined;
}