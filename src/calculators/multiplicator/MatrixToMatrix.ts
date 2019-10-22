import {Data, Matrix} from '../../Matrix';

type Params = {
    leftData:Data;

    leftRowsQty:number;
    rightColsQty:number;
};

export class MatrixToMatrix {
    static calc(left:Matrix, right:Matrix):Matrix {
        const calculator = new MatrixToMatrix(left, right);

        return calculator.calc();
    }

    private constructor(left:Matrix, right:Matrix) {
        left.isCompatibleWithStrict(right);

        this.left = left;
        this.right = right;
    }

    private calc() {
        const params = this.createParams();

        return this.doCalc(params);
    }

    private createParams():Params {
        const leftData = this.left.getData();

        const leftRowsQty = this.left.getRowsQty();
        const rightColsQty = this.right.getColsQty();

        return {
            leftData,
            leftRowsQty,
            rightColsQty
        };
    }

    private doCalc(params:Params) {
        const {leftData, leftRowsQty, rightColsQty} = params;

        const data:Data = [];

        for (let rightCol = 0; rightCol < rightColsQty; rightCol++) {
            for (let leftRow = 0; leftRow < leftRowsQty; leftRow++) {
                data[leftRow] = data[leftRow] || [];

                data[leftRow][rightCol] = this.sumLeftAndRight(leftData[leftRow], rightCol);
            }
        }

        return new Matrix(data);
    }

    private sumLeftAndRight(left:number[], rightCol:number) {
        const callback = (prev, cur, row) => {
            const rightUnit = this.right.get(row, rightCol);

            return prev + cur * rightUnit;
        };

        return left.reduce(callback, 0);
    }

    private readonly left:Matrix;
    private readonly right:Matrix;
}