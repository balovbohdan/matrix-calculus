"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
const mutators_1 = require("./mutators");
const DataPreparer_1 = require("./DataPreparer");
const dimensions_utils_1 = require("./dimensions-utils");
const Map_1 = require("./iterators/Map");
const ForEach_1 = require("./iterators/ForEach");
const ColsReducer_1 = require("./reducers/ColsReducer");
const calculators_1 = require("./calculators");
class Matrix {
    constructor(data) {
        this.data = Matrix.prepareData(data);
    }
    hasTheSameDimensionsStrict(matrix) {
        dimensions_utils_1.SameDimensionsChecker.checkStrict(this, matrix);
    }
    hasTheSameDimensions(matrix) {
        return dimensions_utils_1.SameDimensionsChecker.check(this, matrix);
    }
    reduceCols(callback, initialValue) {
        return ColsReducer_1.ColsReducer.reduce({
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
    isCompatibleWithStrict(matrix) {
        const isCompatible = this.isCompatibleWith(matrix);
        if (isCompatible)
            return this;
        throw new MatrixError(`Matrices are not compatible.`);
    }
    isCompatibleWith(matrix) {
        const colsQty = this.getColsQty();
        const rowsQty = matrix.getRowsQty();
        return colsQty === rowsQty;
    }
    getUnitsSum() {
        const units = this.getPlainData();
        return units
            .reduce((prev, cur) => prev + cur, 0);
    }
    multiply(factor) {
        return calculators_1.Multiplicator.multiply(this, factor);
    }
    divideTermByTerm(divider) {
        return calculators_1.TermwiseDivider.divide(this, divider);
    }
    multiplyTermByTerm(factor) {
        return calculators_1.TermwiseMultiplicator.multiply(this, factor);
    }
    getClone() {
        const data = this.getData();
        return new Matrix(data);
    }
    get(row, col) {
        return this.data[row][col];
    }
    getRows() {
        return this.getData();
    }
    getCols() {
        return this.transpose().getData();
    }
    minus(subtrahend) {
        const invertedSubtrahend = typeof subtrahend === 'number'
            ? -subtrahend
            : subtrahend.inverseSigns();
        return this.sum(invertedSubtrahend);
    }
    plus(addend) {
        return this.sum(addend);
    }
    sum(addend) {
        return calculators_1.Adder.add(this, addend);
    }
    pow(exponent) {
        return this.mutate(unit => Math.pow(unit, exponent));
    }
    inverseSigns() {
        return this.mutate(unit => -1 * unit);
    }
    transpose() {
        return mutators_1.Transposer.transpose(this);
    }
    forEach(callback) {
        ForEach_1.ForEach.start(this, callback);
    }
    getRowsQty() {
        return this.data.length;
    }
    getColsQty() {
        try {
            const cols = this.data[0];
            return cols ? cols.length : 0;
        }
        catch (e) {
            return 0;
        }
    }
    /**
     * Returns matrix data as plain (one-dimensional) array.
     */
    getPlainData() {
        const units = [];
        this.mapData(unit => units.push(unit));
        return units;
    }
    getData() {
        return lib_1.ArrayUtils.getClone(this.data);
    }
    mutate(callback) {
        return this.map(callback);
    }
    map(callback) {
        return Map_1.Map.map(this, callback);
    }
    mapData(callback) {
        return Map_1.Map.mapData(this, callback);
    }
    static prepareData(data) {
        return DataPreparer_1.DataPreparer.prepare(data);
    }
}
exports.Matrix = Matrix;
class MatrixError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
exports.MatrixError = MatrixError;
//# sourceMappingURL=Matrix.js.map