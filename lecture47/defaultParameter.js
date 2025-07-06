//default parameter -> It allows to use function with default values 

//lavi is default parameter 
// function sayName(myName = "Lavi"){
//     console.log("My Name is: ", myName);
// }

// function sayName(firstName = "Lavi", lastName = "vats"){
//     console.log("My Name is: ", firstName," ", lastName);
// } 

// function sayName(firstName = "Lavi", lastName){
//     console.log("My Name is: ", firstName," ", lastName);
// } 

//another case-> where one parameter is dependent on another parameter
function sayName(firstName = "Lavi", lastName = firstName.toUpperCase()){
    console.log("My Name is: ", firstName," ", lastName);
} 

//case-> when parameter is object
function solve(value = {age: 22, weight: 50, height: 6}){
    console.log("Value as object", value);
}
solve()

//case -> when parameter is array
function solve1(value =["Lavina", "Chauhan", true, 22, 60]){
    console.log("value as array: ",value)
}
solve1();

//case-> when parameter is null
function solve2(value = "Lavina"){
    //in case of null, null will print
    console.log("value as null: ",value)
}
solve2(null);

//case-> when parameter is undefined
function solve3(value = "Lavina"){
    //in case of unefined default parameter will print
    console.log("value as null: ",value)
}
solve3(undefined);

//case-> when function as default parameter
function getAge(){
    return 190;
}

function utility(name = "Lavina", age = getAge()){
    console.log(name, " ", age);
}

// utility("Lavina", 20);
utility();


//when we pass value, then function will print this value
// sayName("Lavina");
// sayName("Lavina", "Chauhan");
// sayName("Lavina", "Chauhan");
// sayName("Lavina", "Chauhan");
sayName("Lavina");

//when we do not pass value then function will print default value
sayName();