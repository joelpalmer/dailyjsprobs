/* 
    AKA Masquerade Waiting Line    

    Your friend has invited you to a party, and tells you to meet them in the line to get in. The one problem is it's a masked party. Everyone in line is wearing a colored mask, including your friend. Find which people in line could be your friend.

    Your friend has told you that he will be wearing a RED mask, and has TWO other friends with him, both wearing BLUE masks.

    Input to the function will be an array of strings, each representing a colored mask. For example:

    var line = ['blue','blue','red','red','blue','green'];

    The output of the function should be the number of people who could possibly be your friend.

    friendFind(['blue','blue','red','red','blue','green','chipmunk'])  // should return 1
*/

//if there is a red with a blue on each side: count it
//if there is a red with 2 blues on one side count it
//only count any friend once
//move from one red to the next and if either condition is met, add it to a counter
//this seems like brute force, probably a better way

const friendFind = (line) => {

    let count = 0;
    for(i = 0; i < line.length; i++) 
        if (line[i] === 'red') {
            if (line[i-1] === 'blue' && line[i+1] === 'blue'
                || line[i-1] === 'blue' && line[i-2] === 'blue' 
                || line[i+1] === 'blue' && line[i+2] === 'blue' ) {

                    count++;
            }
        }
            
    return count;
}

const x = friendFind(['blue','red','blue','blue','red','blue','red']); //should be 2
const y = friendFind(['blue','blue','red','red','blue','green']); //should be 1
x;
y;