/*
    Given a list of numbers, return whether any two sums to k.

    Given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17

    Bonus: Doing it one pass
*/
const list = [10, 15, 3, 7];
const sumsToK = (k, nums) => {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], true);
        if (m.has(k - nums[i])) {
            return true;
        }
    }
    return false;
}

console.log("Result:", sumsToK(19, list));
console.log("Result:", sumsToK(18, list));
