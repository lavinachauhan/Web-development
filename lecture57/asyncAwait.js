// Async await -> iska use kr ke asynchronous code ko
// synchronous code ki trha darsha skte hai 

//async function
//this function always return promise
// async function getData(){
//     setTimeout(function(){
//         console.log("Iam inside set time out block")
//     }, 3000);
// }

// //if we print output in console it will print promise, that means async function returns promise
// let output = getData();

//lekin await kya kya logic hai wo smjhte hai

//before that learn about fetch API

//promises ke concept ko aache se manage krne ke liye hi hmare pass async await ka logic aaya
//async await ek esa syntax h jis se hum promises ko efficiently handle kr skte hai


//fetch API -> provides ans interface for fetching resources (including across the network)

//request
//get, post, put, delete


// async function getData(){

//         let response =  await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//         //parse real data from response -> parse json bhi asynchronous hota h isiliye use bhi await mark kr do
//         let data = await response.json();
//         console.log(data)
// }

// getData();

//scenario:

//prepare url / api endpoint -> sync
//await //fetch data -> network call -> async
//process data -> sync

//end point pe jake data lekr aana ek asynchronous task hai jise hum aysync await ka use kr ke synchronous bna dete hai


//benefit of await keyword
//await -> usi function mai lagta h jismai function async ho
//await -> jis line pr lagta h usi line pr flow of execution stop kr deta h 
//jb tk data fetch nhi ho jata tb tk

//ab agr await use na kiya hota to data fetch hota aur usmai kitna bhi time 
//lg skta hai, lekin usi ke saath data process hona start ho jata 
//jo hume undefined show krta kyoki data abhi completely network call se aaya hi nhi h 
//isiliye hum yha await use krte jo flow to execution ko usi line pr stop kr deta jb tk data completely fetch na hota


//ab yha async await ka use kr ke synchronous behaviour aa gya h code mai


//api ki get request ke alawa jitni bhi dusri request h un sb mai url ke saath options bhi bhejna hota h  

async function getData(){
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}


async function postData(){
    const response = await fetch('https://dummyjson.com/posts/add', {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: 'Lavina chauhan',
            userId: 5,
            /*other post data */
        })
    })
    let data = await response.json();
    console.log("post data response: ", data);
}


async function processData() {
    await postData();
    await getData();
}

processData();