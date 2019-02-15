"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TermwiseDivider = /** @class */ (function () {
    function TermwiseDivider() {
    }
    TermwiseDivider.divide = function (dividend, divider) {
        var flippedDivider = this.getFlippedDivider(divider);
        return dividend.multiplyTermByTerm(flippedDivider);
    };
    TermwiseDivider.getFlippedDivider = function (divider) {
        return typeof divider === 'number'
            ? 1 / divider
            : divider.pow(-1);
    };
    return TermwiseDivider;
}());
exports.TermwiseDivider = TermwiseDivider;
