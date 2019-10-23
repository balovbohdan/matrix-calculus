"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayUtils {
    static getClone(array) {
        const clone = JSON.parse(JSON.stringify(array));
        return clone;
    }
}
exports.ArrayUtils = ArrayUtils;
//# sourceMappingURL=ArrayUtils.js.map