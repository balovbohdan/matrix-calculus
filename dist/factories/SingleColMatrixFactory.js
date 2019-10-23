"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("../Matrix");
class SingleColMatrixFactory {
    static create(data) {
        const dataPrepared = data.map(n => [n]);
        return new Matrix_1.Matrix(dataPrepared);
    }
}
exports.SingleColMatrixFactory = SingleColMatrixFactory;
//# sourceMappingURL=SingleColMatrixFactory.js.map