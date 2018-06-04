/* 
The alphabetized kata

Re-order the characters of a string, so that they are concatenated into a new string in
-- "case-insensitively-alphabetical-order-of-appearance" -- order. 
Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.
*/

//you can't simply remove whitespace, toLower and sort because of..
//"case-insensitively-alphabetical-order-of-appearance"
//give each matching letter an order -- this could be the money


const alphabetized = (s) => {
    const x = s.replace(/[^A-Z]/ig, "").split("").map((a, i) => [a, i])
        .sort((a, b) => {
          return a[0].toLowerCase().charCodeAt(0) > b[0].toLowerCase().charCodeAt(0) ?
            1 : a[0].toLowerCase().charCodeAt(0) < b[0].toLowerCase().charCodeAt(0) ?
           -1 : a[1] - b[1]
        });
    return x.map(a => a[0]).join("");
}



const a = alphabetized("The Holy Bible"); // 'BbeehHilloTy'
a;