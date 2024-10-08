let a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
function flattenArray(arr, level) {
    if (level === 0) {
        return arr.slice();
    }
    return arr.reduce((curr, next) => {
        let result;
        if (Array.isArray(next)) {
            result = curr.concat(flattenArray(next, level - 1));
        }
        else {
            result = curr.concat(next);
        }
        return result;
    }, []);
}
console.log(flattenArray(a, 0));
