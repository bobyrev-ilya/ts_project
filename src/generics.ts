const array: Array<number> = [1,12,3,32,2];
function reverse<T>(array: T[]): T[]{
    return array.reverse();
}