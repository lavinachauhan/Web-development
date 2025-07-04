//function creation
function sayMtName()
{
    console.log("Lavina Chauhan");
}
function printCounting()
{
    for(let i = 0; i <= 100; i++)
    {
        console.log(i);
    }
}

function printNumber(num)
{
    console.log("Printing number", num);
}

function getAverage(num1, num2)
{
    let avg = (num1 + num2) / 2;
    console.log("Averages:", avg);
}
//call a function
sayMtName();
// printCounting();
let num = 10;
printNumber(num);
getAverage(9, 8);


//return functions
function getSum(a, b, c)
{
    return a + b + c;
}
console.log(getSum(10, 20, 30));

function getMyName(firstName, lastName)
{
    return firstName + lastName;
}

console.log(getMyName("lavina", "chauhan"));


let getMultiply = function(a, b){
    return a * b;
}

console.log(getMultiply(2, 3));
 
// function getExp(x, y)
// {
//     let ans = x ** y;
//     return ans;
// }

// console.log("normal function", getExp(2, 10));

// let getExp = function(x, y)
// {
//     let ans = x ** y;
//     return ans;
// }
// console.log("function name as expression", getExp(2, 10));

let getExp = (x, y) =>{
    let ans = x ** y;
    return ans;
}
console.log("arrow function", getExp(2, 10));