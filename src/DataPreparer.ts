import {Data} from './Matrix';
import {Security} from './Security';
import {ArrayUtils} from './lib';

export class DataPreparer {
    static prepare(data?:Data):Data {
        if (!data)
            return [];

        data = ArrayUtils.getClone<Data>(data);

        Security.validateData(data);

        return data;
    }
}