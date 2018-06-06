/* 
6 kyu
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

//high('man i need a taxi up to ubud'), => 'taxi'
//create an array of object with letter and score
const high = (x)=> {
    const letters = x.split(" ").join("").split("");
    const scores = letters.map((l, i) => {
        return {
            letter: l,
            score: i+1
        }
    });

    const words = x.split(" ");
    const wordScores = words.map((w) => {
        const scores = w.split("");
        scores;
    })
    return scores;

}

const l = high('man i need a taxi up to ubud');
l;