// let arr = [1, 2, 3];
// let arr1 = [1,2];
// arr.sayHello = () => {
//     console.log("Hello there");
// }

// arr1.sayHello = () => {
//     console.log("hello there")
// }

// factory functions

function personmaker(name, age){
    const person = {
        name : name,
        age : age, 
        talk() {
            console.log(`Hi my name is ${name}`);
        }
    }
    return person;
}