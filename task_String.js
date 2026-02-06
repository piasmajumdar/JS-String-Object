// Task-1:
// Count how many times a string has the letter a
const sentence1 = 'I am a goat lover aa';
count = 0;
for (let i of sentence1) {
    if (i === 'a') {
        count++;
    }
}
console.log(count);




// Task-2:
// Count how many times a string has the letter a or A
const sentence2 = 'I am a goat lover AA';
count = 0;
for (let i of sentence2) {
    if (i.toLowerCase() === 'a') {
        count++;
    }
}
console.log(count);




// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const sentence3 = ' am a goat lover AA australa';

if (
  sentence3.toLowerCase().includes('a') &&
  sentence3.toLowerCase().includes('e') &&
  sentence3.toLowerCase().includes('i') &&
  sentence3.toLowerCase().includes('o') &&
  sentence3.toLowerCase().includes('u')
) {
    console.log('Contains all vowels')
}
else{
    console.log('does not contains all vowels')
}

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const sen3 = "I love x but not X, Y loves x";
let newSen3 = '';
for (let char of sen3) {
    if (char === 'x'){
        newSen3 += 'y';
    }
    else if(char === 'X') {
        newSen3 += 'Y';
    }
    else {
        newSen3 += char;
    }
}
console.log(newSen3);

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// Task-5:
// Capitalize Every first Letter of each word in a String
let sentence4 = ' I am a goat lover Aa australa';
let words = sentence4.trim().split(' ');

let result = [];
for(let word of words) {
    let upChar = word[0].toUpperCase() + word.slice(1);
    result.push(upChar);
}
console.log(result.join(" "));