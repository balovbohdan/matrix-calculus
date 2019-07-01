## About
`matrix-calculus` is a TypeScript library created to perform common matrix calculations. At first realizations it was created for neural network engine called "Nika" (for game AI aims). The library is successfully working as part of the highloaded game AI service based on Node JS.

All operations are immutable. So methods you are using to change matrix will return changed version of the matrix; base version will stay untouchable.

## Installation
```bash
npm i --save matrix-calculus
```

## Usage
```typescript
import {Matrix, Data} from 'matrix-calculus';
import {SingleColMatrixFactory} from 'matrix-calculus/factories';

const valuesRaw:number[] = [2, 5, 3, 6, 2];
const weightsRaw:number[] = [1.7364, .8255, .01672, 1.8354, .5948];

const values:Matrix = SingleColMatrixFactory.create(valuesRaw);
const weights:Matrix = SingleColMatrixFactory.create(weightsRaw);

const weightedValues:Matrix = values.multiplyTermByTerm(weights);
const weightedValuesTransposed:Matrix = weightedValues.transpose();

const serialized:Data = weightedValuesTransposed.getData();

console.log('Transposed weighted values:', serialized);
```

## GitHub repository
https://github.com/balovbohdan/matrix-calculus

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
