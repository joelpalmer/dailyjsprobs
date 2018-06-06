const high = (x) => {
    const words = x.split(" ");
    let highestScore = 0;
    let highestScoringWord = "";

    words.map((word) => {
        let score = wordScore(word);
        if (score > highestScore) {
            highestScore = score;
            highestScoringWord = word;
        }
    });

    return highestScoringWord;
}

const wordScore = (word) => {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    let score = 0;
    word.split("").map((letter) => {
        score += alphabet.indexOf(letter) + 1;
    });
    return score;
}

console.log(high("man i need a taxi up to ubud")); //, 'taxi');