"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.getClone = function (array) {
        var clone = JSON.parse(JSON.stringify(array));
        return clone;
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
