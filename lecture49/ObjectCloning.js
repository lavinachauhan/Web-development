let originalObj = {age: 12,
    weight: 50,
    height: 6
};
console.log(originalObj);

//Why object is called dynamic?
//because we can change object properties at runtime
originalObj.color = "White";
console.log(originalObj);

//object cloning means copying of object
//ways to do object cloning

//01-> spread operator (... -> three dots is spred operator)is used
let dupe = originalObj; //this means two reference on single object
let dupeObj = {...originalObj}; // means another copy of object in memeory
console.log("Original object: ", originalObj);
console.log("Duplicate object: ", dupeObj);

//if we do change in original object, 
//then duplicate object will not reflect from these changes
originalObj.age = 90;
console.log("After change: ")
console.log("Original object: ", originalObj);
console.log("Duplicate object: ", dupeObj);

//02-> Assign method
console.log("After change: ")
let dupeObj2 = Object.assign({}, originalObj);
console.log("Original object: ", originalObj);
console.log("Duplicate object: ", dupeObj2);

//03-> using for loop -> iteration method (try to avoid this method)
let dupeObj3 = {};

for(let key in originalObj)
{
    let newKey = key;
    let newValue = originalObj[newKey];
    dupeObj3[newKey] = newValue;
}
console.log("Old object: ", originalObj);
console.log("New object: ", dupeObj3);
 
 
