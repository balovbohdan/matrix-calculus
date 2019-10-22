import {Data} from './Matrix';

export class Security {
    static validateData(data:Data):void|never {
        try {
            const rowsNum = data.length;
            const colsNum = data[0].length;

            for (let row = 0; row < rowsNum; row++)
                for (let col = 0; col < colsNum; col++)
                    if (typeof data[row][col] !== 'number')
                        this.throwInvalidData(data);
        } catch (e) {
            this.throwInvalidData(data);
        }
    }

    private static throwInvalidData(data):never {
        throw new DataError(`Got invalid matrix data.`, data);
    }
}

class DataError extends Error {
    constructor(message:string, matrix:Data) {
        super(message);

        this.message = message;
        this.stack = (new Error()).stack;
        this.data = matrix;
    }

    readonly data:Data;
    readonly message:string;
    readonly stack:string|undefined;
}