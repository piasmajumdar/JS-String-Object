const country = 'Bangladesh';
const division = "Dhaka";
const district = `Gazipur`;
const thana = new String('Tongi');

console.log(typeof country);
console.log(thana);

const numbers = [54, 98, 78, 21,65];
console.log(numbers.length);
console.log(numbers[2]);
numbers[2] = 100;
console.log(numbers);


//String is immutable --> not changeable
// array is mutable --> changeable
const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[3]);
capital[0] = 'F'; // This will not change the string
console.log(capital);

