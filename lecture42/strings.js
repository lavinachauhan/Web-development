let firstname = "lavina"; 
let secondname = "chauhan";

console.log(firstname);
console.log(secondname);

let sentence = `My 
name 
is 
Lavina`;

console.log(sentence);

let newName = new String("lavina");
console.log(newName);

//operations on string
let sub1 = "hindi";
let sub2 = "english";
// let combination = sub1 + " " + sub2;
// console.log(combination);
console.log(`${sub1} and ${sub2}`);
console.log(sub1.toUpperCase());
let a = "hello world this side lavina";
console.log(a.substring(3, 8));
console.log(a.split(' '));
let b = "hello \\world \\this \\side \\lavina";
console.log(b.split('\\'));
let c = b.split('\\');
console.log(c.join('-'));
