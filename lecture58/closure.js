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
let inner = outerFunction();

inner();

//ab question ye h ki, jb hum outerFunction() ke scope se bahar aaenge
//to name ki memory free ho gai hogi
//main question hai kya hum agr nested function ke bahar
//innerfunction() ke through name ki value print krwa skte h?