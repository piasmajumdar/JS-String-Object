const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// uppercase: ABCD EFG
// lowercase: abcd efg

const subject = 'Chemistry';
const book = 'chemisTry';

if(subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading book aibar porikkhai fatai felmu');
}
else {
    console.log('hudai prista ultai ar vat khawar jonno');
}

const drink = 'water ';
const liquid = '   water   ';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam life');
}
else {
    console.log('somudre pani ase khaite pari na');
}