export class ArrayUtils {
    static getClone<T>(array:T):T {
        const clone = JSON.parse(JSON.stringify(array));

        return <T>clone;
    }
}