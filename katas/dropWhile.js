const dropWhile = (arr, pred) => {
    let i = 0;
    const len = arr.length;
    while (i < len && pred(arr[i])) {
      i += 1;
    }
    return Array.prototype.slice.call(arr, i, Infinity);
}