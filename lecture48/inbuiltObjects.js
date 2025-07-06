//Math object
console.log(Math.PI);
console.log(Math.max(30, 70, 20, 10, 60));
console.log(Math.min(30, 70, 20, 10, 60));
console.log(Math.round(1.5));
console.log(Math.floor(1.5));
console.log(Math.ceil(1.5));
console.log(Math.abs(-1));
console.log(Math.random()); // return  random number between 0 to 1
console.log(Math.sqrt(5));
console.log(Math.pow(2,10));

//Date object
let curr = new Date();
console.log(curr)

let date = new Date("2025 07 06 06:37")
console.log(date);

let newDate = new Date(2002, 11, 16, 7);
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getFullYear());
newDate.setFullYear(2025);
console.log(newDate);
