//arithmetic operators

//+ - / * % **

let a = 10;
let b  = 5;
console.log(a ** b);

//unary operators
//++ --
console.log("before increment:", a);
a++;
console.log("after increment:", a);
console.log("before decrement:", a);
a--;
console.log("after decrement:", a);

//assignment operators
//= += -= *= /= 

let c = 30;
console.log("before use of assignment operator", c);
c += 10;
console.log("after use of assignment operator", c);

//comparison operators
//> < >= <= == === != !== 
console.log(10 > 5);
console.log(5 >= 5);
console.log(10 <= 5);

//imp: strictly equality(datatype and value should be same)
let p = "10";
let q = 10;
console.log("strictly equality", p === q);
//imp: loose equality(only value should be same, datatype doesn't matter)
console.log("loose equality", p == q);

//ternary operator
let age = 18;
console.log((age >= 18)? "I can vote":"I can not vote");

//logical operators
let var1 = true;
let var2 = false;
let var3 = true;
console.log(var1 && var2);
console.log(var1 && var3);
console.log(var1 || var3);
console.log(var1 || var2);
console.log(!var1);

// false && "10" ??? what will happen in case of non booleans
//falsey value
//undefined, null, 0, false, Nan, ' '

//truthy -> anything which is not falsey

console.log(" true && 10 ??? what will happen in case of non booleans -> truthy value will print", true && "10");

//bitwise operators
//& | ~ << >> ^ 
console.log(2 & 5);
console.log(2 | 5);
console.log(~2);
console.log(32 >> 4);
console.log(2 << 4);
console.log(2 ^ 2);
console.log(0 ^ 4);