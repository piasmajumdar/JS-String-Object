const address = 'andorKilla';
const part = address.slice(2, 5);
console.log(part);

const sentence = 'I am a good and hardworking person';
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendStr = 'rahim,karim,jabbar,habib,sobuj';
const friends = friendStr.split(',');
console.log(friends);
console.log("-------------");

const realFriends = ['rahim', 'karim', 'jabbar', 'habib', 'sobuj'];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));