"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Security_1 = require("./Security");
const lib_1 = require("./lib");
class DataPreparer {
    static prepare(data) {
        if (!data)
            return [];
        data = lib_1.ArrayUtils.getClone(data);
        Security_1.Security.validateData(data);
        return data;
    }
}
exports.DataPreparer = DataPreparer;
//# sourceMappingURL=DataPreparer.js.map