"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Security {
    static validateData(data) {
        try {
            const rowsNum = data.length;
            const colsNum = data[0].length;
            for (let row = 0; row < rowsNum; row++)
                for (let col = 0; col < colsNum; col++)
                    if (typeof data[row][col] !== 'number')
                        this.throwInvalidData(data);
        }
        catch (e) {
            this.throwInvalidData(data);
        }
    }
    static throwInvalidData(data) {
        throw new DataError(`Got invalid matrix data.`, data);
    }
}
exports.Security = Security;
class DataError extends Error {
    constructor(message, matrix) {
        super(message);
        this.message = message;
        this.stack = (new Error()).stack;
        this.data = matrix;
    }
}
//# sourceMappingURL=Security.js.map