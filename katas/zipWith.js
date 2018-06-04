const zipWith = (fn, a, b) => {
    let i = 0;
    const len = Math.min(a.length, b.length);
    const combined = [];
    while (i < len) {
        combined[i] = fn(a[i], b[i]);
        i += 1;
    }
    return combined;
}

const add = (a, b) => {
    return a + b;
};


const x = zipWith(add, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]);
x;