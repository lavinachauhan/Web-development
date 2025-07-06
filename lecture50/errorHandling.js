//compile time error-> jo error run krne se pehle hi pta chl jate h -> e.g. syntax error
//runtime error-> jo error run krne ke baad pta chlte hai e.g. -> reference error (like variable ko print kra rhe h bina define kiye) 

//error handling can be done using try, catch block

//try -> write those code in this block, where you have doubt that error may occur

try{
    console.log("try block starts here");
    // console.log(x);
    console.log("try block ends here");
}
catch(e){
    //is block mai define krte h ki error ke saath kya krna hai

    //what we can do inside catch block
    //retry logic
    //fallback mechanism
    //logging
    //custom error
    // console.log("I am inside catch block");
    // console.log("Your error is here: ", e); 
    // throw new Error("Please declare the variable, then print")

}
//finally block -> this block will run every time, wheater the error occured or not
finally{
    console.log("I will every time, as I am finally block");
}

//throw -> custom error is created using throw

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json")
}