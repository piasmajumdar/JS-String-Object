const person = {
    name: 'sodor uddin',
    age: 35,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'pataya', 'bandarban'];
console.log(person)

const propName = 'profession';
person[propName] = 'devops';
console.log(person);