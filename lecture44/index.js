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
let brr = new Array("lavina", 1, true);
console.log(brr);

// console.log(typeof(arr));
// console.log(arr[2])

//built in methods of array

//push-> indert at end
brr.push("chauhan");
console.log(brr);

//pop-> remove last element
brr.pop();
console.log(brr);

//shift-> remove first element
brr.shift();
console.log(brr);

//unshift-> add element at leftmost side
brr.unshift("Lavina Chauhan");
console.log(brr);
brr.push(10);
brr.push(20);
brr.push(30);
brr.push(40);

console.log(brr);
//slice -> gives a part
console.log(brr.slice(2,4));
//splice-> It can modify array content(insert, update, delete)

//1 index se 2 value remove kro aur uski jagha chauhan daal do
brr.splice(1, 2, "chauhan");
console.log(brr);
//1 index se (0 value) koi bhi value ko remove mt kro remove kro aur new element add kr do(1 index pr, current element 1 index pr shift ho jaega)
brr.splice(1, 0, "heloo");

console.log(brr);

//map, filter, reduce, sort, indexof, find

