// let arr = [1, 2, 3];
// let arr1 = [1,2];
// arr.sayHello = () => {
//     console.log("Hello there");
// }

// arr1.sayHello = () => {
//     console.log("hello there")
// }

// factory functions

// function personmaker(name, age){
//     const person = {
//         name : name,
//         age : age, 
//         talk() {
//             console.log(`Hi my name is ${name}`);
//         }
//     }
//     return person;
// }

// Constructors -> it doesn't return anything and start with capital letter

// function PersonMaker(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// PersonMaker.prototype.talk = () => {
//     console.log("I can talk")
// }

// let p1 = new PersonMaker("lavina", 22);
// let p2 = new PersonMaker("lavi", 22);

// classes

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log("I can talk");
//     }
// }

// let p1 = new Person("lavina", 22);

// Inheritance

class Person{
    constructor(name, age){
        console.log("Parent class constructor called")
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`My name is ${name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("child class constructor called")
        super(name, age);
        this.marks = marks;
    }

    mymarks(){
        console.log(`My marks is ${this.marks}`);
    }
}

class Teacher extends Person{
    constructor(name, age, salary){
        console.log("child class constructor called")
        super(name, age);
        this.salary = salary;
    }

    mysalary(){
        console.log(`My salary is ${this.salary}`);
    }
}