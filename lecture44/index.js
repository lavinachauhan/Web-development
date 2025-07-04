// let obj = {
//     "Name" : "Lavina",
//     "Age" : 22,
//     "hobbie" : "coding",
//     "greet" : function(){
//         console.log("Heloo jee kasie ho sare")
//     }
// }

// console.log(obj);
// console.log(obj.Age);
// obj.greet();
// console.log(typeof(obj));

// //shallow copy, no data copied but only another object
// //pointing to existing object
// let obj2 = obj;

// //array is a kind of list which can contain different items
// //array can be define in two ways
// //1-> [] using square brackets
// //2 -> using array consturctor

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [1, 2, "lavina", true];
// console.log(arr);

//array constructor
// let brr = new Array("lavina", 1, true);
// console.log(brr);

// // console.log(typeof(arr));
// // console.log(arr[2])

// //built in methods of array

// //push-> indert at end
// brr.push("chauhan");
// console.log(brr);

// //pop-> remove last element
// brr.pop();
// console.log(brr);

// //shift-> remove first element
// brr.shift();
// console.log(brr);

// //unshift-> add element at leftmost side
// brr.unshift("Lavina Chauhan");
// console.log(brr);
// brr.push(10);
// brr.push(20);
// brr.push(30);
// brr.push(40);

// console.log(brr);
// //slice -> gives a part
// console.log(brr.slice(2,4));
// //splice-> It can modify array content(insert, update, delete)

// //1 index se 2 value remove kro aur uski jagha chauhan daal do
// brr.splice(1, 2, "chauhan");
// console.log(brr);
// //1 index se (0 value) koi bhi value ko remove mt kro remove kro aur new element add kr do(1 index pr, current element 1 index pr shift ho jaega)
// brr.splice(1, 0, "heloo");

// console.log(brr);

//map -> It takes every value from array 
//and perform the defined function

let arr = [10, 21, 30, 13, 17];
// let ansArr = arr.map((number)=>{
//     return number * number;
// })

// console.log("Answer array: ", ansArr);
// arr.map((number, index) =>{
//     console.log(number + 1);
//     console.log(index)
// })


//filter
let ans = arr.filter((number) => {
    return number%2 === 0;
    // if(number % 2 === 0) return true;
    // else return false;
}
)

console.log(ans);

let arr1 = [1, 2, "Lavina", null, true];
let ans1 = arr1.filter((value) =>{
        if(typeof(value) === 'string') return true;
        else return false;
})

console.log(ans1);
 
//reduce 
let arr2 = [10, 20, 30, 40];
let ans2 = arr2.reduce((acc, curr) =>{
    return acc + curr;
}, 10)

console.log(ans2);


//sort
let arr3 = [3, 4, 1, 2];
arr3.sort();
console.log(arr3);

//indexof
console.log(arr3.indexOf(0));

for(let index = 0; index < arr3.length; index++) console.log(arr3[index]);

//find


//forEach
arr3.forEach((value, index) =>{
    console.log("Number-> ", value, "Index-> ", index);
})

//forIn
let obj = {
    name: "Lavina",
    age: 22,
    greet: function(){
        console.log("hello jee kasie ho saare");
    }
};

for(let key in obj){
    console.log(key, " ", obj[key]);
}

//forOf

let arr4 = [10, 20, 30, 40];
for(let value of arr4) console.log(value);

let fullName = "Chauhan";
for(let val of fullName){
    console.log(val);
}


//Arrays with functions
function getSum(arr)
{
    let len = arr.length;
    let sum = 0;
    // for(let i = 0; i < len; i++)
    // {
    //     console.log(arr[i]);
    //     sum = sum + arr[i];
    // }
    arr.forEach((value) =>{
        sum += value;
    })
    return sum;
}

let totalSum = getSum(arr4);
console.log(totalSum);

