const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("views", path.join(__dirname, "/views"))
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/random", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6 + 1);
    res.render("rolldice.ejs", {diceValue})
}) 

app.get("/id/:username", (req, res) => {
    const instaData = require("./data.json");
    let {username} = req.params;
    console.log(instaData);
    let data = instaData[username];
    if(data){
        console.log(data);
        res.render("instagram.ejs", {data});
    }
    else{
        res.render("error.ejs");
    }
   
})