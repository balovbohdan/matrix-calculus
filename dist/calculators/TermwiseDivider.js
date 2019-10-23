"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TermwiseDivider {
    static divide(dividend, divider) {
        const flippedDivider = this.getFlippedDivider(divider);
        return dividend.multiplyTermByTerm(flippedDivider);
    }
    static getFlippedDivider(divider) {
        return typeof divider === 'number'
            ? 1 / divider
            : divider.pow(-1);
    }
}
exports.TermwiseDivider = TermwiseDivider;
//# sourceMappingURL=TermwiseDivider.js.map