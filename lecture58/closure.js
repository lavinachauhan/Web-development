// Jb function ko required data (lexical scope or surrounding state) ke
//  saath bind krte h to wo ek closure bn jata h

// let name = "Jhanvi";
function outerFunction(){
    // {
    //     let name = "Lavina";
    // }
    let name = "Sunita";
    function innerFunction(){
        console.log(name);
    } 
    // innerFunction();
    //return  reference of inner function
    return innerFunction;
}

//jb outerfunction call hoga wo innerfunction ka 
//reference return krega 
//jb hum outerfunction ka scope khatam hone ke baad 
// inner function ko call krenge to wo apne required data ke saath bind ho jaega
//note -> is data ki copy nahi bani h iska reference share hua h
//name ka reference innerFunction() ke saath bind ho jaega aur hum use 
// print krwa paenge

let inner = outerFunction();

inner();

//ab question ye h ki, jb hum outerFunction() ke scope se bahar aaenge
//to name ki memory free ho gai hogi
//main question hai kya hum agr nested function ke bahar
//innerfunction() ke through name ki value print krwa skte h?