const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'ironman@123'
});

// for inserting data in bulk, instead of returning object we return array
let getRandomUser = () => {

    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};


// inserting new data
// let q = "INSERT INTO user VALUES ?";

// let data = [];

// for(let i = 0; i <= 100; i++){
//    data.push(getRandomUser());
// }


// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// let users = [["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//             ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];



// try{
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } catch(err){
//     console.log(err);
// }

// connection.end();

// GET/ fetch & show total number of users on our app
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        // console.log(result[0]["count(*)"]);
        // res.send(result[0]["count(*)"]);
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count });
    })
    } catch(err){
        console.log(err);
        res.send("some error in database");
    }
});

app.listen("8080", () => {
    console.log("Server is listening to port 8080");
})