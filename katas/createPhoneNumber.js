/* 

    Write a function that accepts an array of 10 integers (between 0 and 9), 
    that returns a string of those numbers in the form of a phone number.

    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    The returned format must be correct in order to complete this challenge. 

    This is pretty real-world except the array part, 
    a string that contains 10 numbers needing formatting you see in forms all over
*/
// "(818) 867-5309"
const nums = [8, 1, 8, 8, 6, 7, 5, 3, 0, 9];

const createPhoneNumber = (numbers) => {
    const numberStr = numbers.join('');
    //not a regex fan
    return `(${numberStr.substr(0, 3)}) ${numberStr.substr(3, 3)}-${numberStr.substr(6, 4)}`
}

const x = createPhoneNumber(nums);
x;