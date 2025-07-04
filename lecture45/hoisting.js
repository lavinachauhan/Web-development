// call stack and hoisting

//hoisting -> process which shift variable and function declaration to the 
//top in their scope

sayMtName("Lavina");

//function hoisting

//function hoisting will not work in function expression,it will only
//work in normal function
//calling pehle h declaration baad mai, to hoisting 
//ki whaja se ye function automatically is calling se pehle shift 
//ho gya hoga
//isi process ko function hoisting kehte hai
//function ke case mai declaration along with defination shift hoti h

function sayMtName(finalName)
{
    console.log(finalName);
}

//variable hoisting

//variable hoisting only possible with var keyword not with let and const
//yha sirf var keyword se bne variable ki baat ho rhi hai 
//note:- try to avoid var keyword(becasue it can lead to confusion)
//variable ke case mai sirf declaration shift hoti h defination nhi
//isiliye ye line output mai undefined degi(mtlb koi value define nhi ki)
// console.log(age);
// var age = 22;

//class hosting is not possible 
//if we define class after object, then class hoisting is not possible

class human{

}

const object1 = new human();

//why functions  are called first class citizens-> 
//beacuse functions play an important role in js 
//1-> functions can be assign to variable
let greet = function(){
    console.log("Greeting for the day");
}
greet();



//2-> function can be pass as an argument
function greetMe(greet1, fullName)
{
    console.log("Hello", fullName);
    greet1();
}

function greet1()
{
      console.log("Greeting for the day1");
}

greetMe(greet1, "Lavina chauhan");
 


//3-> we can return functions also
function solve(number)
{
    return function(number)
    {
        return number * number;
    }
}

let ans = solve(5);//is fiveko as a parameter pass krne se koi frk nhi pdega
//solve ne function return kiya 
// ab ans khud ek function bn gya hai

let finalAns = ans(10);
console.log(finalAns);

//4-> use function in data structures 
const arr = [
    function(a, b)
    {
        return a + b;
    },
    function(a,b)
    {
        return a - b;
    },
     function(a,b)
    {
        return a * b;
    }
];

let first = arr[2];
let ans1 = first(5, 10);
console.log(ans1);


//5-> can be used as preperty in object
let obj1 = {
    name: "Lavina",
    age: 22,
    greet: function() {
        console.log("Hello duniya");
    }
};

console.log(obj1);

//greeting(); //expression function host nhi hoga lekin variable ho skta h
console.log(greeting);
var greeting = function(){
    console.log("namaste duniya");
}

