import { Matrix } from '../Matrix';
export declare class SameDimensionsChecker {
    static checkStrict(left: Matrix, right: Matrix): void | never;
    static check(left: Matrix, right: Matrix): boolean;
}
