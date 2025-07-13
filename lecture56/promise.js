//promise and synchronous message
// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Lavina")
//     // resolve(100);
//     reject(new Error("internal server error"));
// });

//promise and asynchronous message
// let firstPromise = new Promise((resolve, reject) => {
//     function sayMyName(){
//         console.log("My Name is Lavina Chauhan");
//     }
//     setTimeout(sayMyName, 10000);
//     // return 1;
//     resolve(1);
// });



let promise1 = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Promise Fullfilled");
    }
    else{
        reject("Promise Rejected");
    }
});

// promise1.then((message) => {
//     console.log("Message fullfilled", message)
// }).catch((message) =>{
//     console.log("Message not fullfilled", message)
// })

promise1.then((message) => {
    console.log("first message: " + message)
    return "Promise fullfilled second message";
}).then((message) => {
    console.log("second message: " + message)
    return "Promise fullfilled third message";
}).then((message) => {
    console.log("third message: " + message)
    return "Promise fullfilled forth message";
}).then((message) => {
    console.log("forth message: " + message)
    return "Promise fullfilled fifth message";
}).catch((error) =>{
    console.error(error);
}).finally((message) => {
    console.log("Mai to final hu hamesha chalunga")
})


// multiple promises
//Promise.all()

let promise01 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})

let promise02 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
})

let promise03 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Third");
})

Promise.all([promise01, promise02, promise03])
.then((values) =>{
    console.log(values);
})
.catch((error) =>{
    console.error("error: " + error);
})




