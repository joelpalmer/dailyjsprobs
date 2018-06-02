/*
    Given a list of numbers, return whether any two sums to k.

    Given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17

    Bonus: Doing it one pass
*/

const twoSum = (nums, k) => {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = k - nums[i];
        if (m.has(complement)) {
            return [m.get(complement), i];
        }
        m.set(nums[i], i);
    }
    
}
const x = twoSum([1,2,3], 4);//expect [0,2]
