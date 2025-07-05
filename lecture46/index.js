//  Global scope
// var age = 22;
// console.log(age);

// {
//    console.log(age); 
// }

// if(true){
//     console.log(age); 
// }

// for(let i = 0; i <2; i++)
// {
//     console.log(age); 
// }

// function sayHello(){
//     console.log("hi", age); 
// }

// sayHello();

//function scope -> In function scope variable 
//can only accessed with in the function only
function Hello(){
    let fullName= "Lavina";
    console.log("hi", fullName); 
}
Hello();
// console.log("hi", fullName); this will not work it gives error

//block scope -> In block scope variable can be accessed gloally(only var type variable)
{
    var marks = 22;
}
//var type variable can be accessed globally
console.log("Marks:", marks);

//if Marks is of let or const type then it can not be accessed globally


//Temporal dead zone -> condition when we try to host let or const type variable

// console.log("Number", num);
// console.log("Lavina");
// console.log("Hello");
const num = 20;
console.log("Number", num);

// line 45 to 47 is comes under temporal dead zone

 