import {Matrix} from '../Matrix';

export class TermwiseDivider {
    static divide(dividend:Matrix, divider:Matrix|number) {
        const flippedDivider:Matrix|number = this.getFlippedDivider(divider);

        return dividend.multiplyTermByTerm(flippedDivider);
    }

    private static getFlippedDivider(divider:Matrix|number):Matrix|number {
        return typeof divider === 'number'
            ? 1 / divider
            : divider.pow(-1);
    }
}