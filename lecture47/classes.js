  class Human{
    //properties
    //default access specifier is public
    age;
    #weight = 50; //using hashtag we can mark data member private
    height = 6;

    //constructor
    constructor(newAge, newHeight, newWeight){
      this.age = newAge;
      this.height = newHeight;
      this.#weight = newWeight;
    }
    //behaviour
    walking(){
        console.log("I am walking", this.#weight); // private member can be accessed inside the class
        //this represent current object
        //current object ka weight variable ko access kr rhe hai (this.#weight) se
    }

    //private function of Human class
    #running(){
        console.log("I am running");
    }

    get fetchWeight(){
      return this.#weight;
    }

    set modifyWeight(val){
      this.#weight = val;
    }
  }

  let obj = new Human(50, 190, 70);
  console.log("Age", obj.age);
  console.log("Height", obj.height);
  console.log(typeof(obj.age));
  obj.walking();
  console.log("Weight accessed using getter function", obj.fetchWeight);// () round brackets can not used when we call getter and setter function
//   console.log(obj.#weight); //can not be accessed outside class due to private member

//How to access private field outside the class
//Getters and setters is used
//getter is used to fetch the private field of the class
//setter is used to set values of the private field
//if we use getter and setter to access private field then we can say that we establish encapsulation in the class


