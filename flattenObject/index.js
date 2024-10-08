//flate this object
const obj = {
    A: '12',
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    }
};

function flateObject(obj, parent) {
    let newObj = {};
    function generateFlattenObj(obj, parent) {
        for (let key in obj) {
            const newParent = parent + key;
            const value = obj[key];
            if (typeof value === 'object') {
                generateFlattenObj(value, newParent + '.');
            }
            else {
                newObj[newParent] = value
            }
        }
    }
    generateFlattenObj(obj, parent);

    return newObj
}
console.log(flateObject(obj, ''));


