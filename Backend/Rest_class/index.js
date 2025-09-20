const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require("uuid");


app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    { 
      id : uuidv4(),
      name: "lavinaji",
      content: "padhai pr dhyn de"
    },
    {
      id : uuidv4(),
      name:"Lavi",
      content: "mission GATE2027"
    },
    {
      id : uuidv4(),
      name : "Nikki",
      content: "Kewal padhai krni hai basic strong kr"
    }
];

// index route
app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
})

// create route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


// show route
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    // res.send("Request is working");
    // console.log(post);
    res.render("show.ejs", {post});
})

app.post("/posts", (req, res) => {
  let {name, content} = req.body;
  let id = uuidv4();
  posts.push({id, name, content});
  // res.send("post request working");
  res.redirect("/posts");
})


// update route
app.patch("/posts/:id", (req, res) => {
  let {id} = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  // console.log(newContent);
  // console.log(id);
  console.log(post);
  res.send("patch request working");
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});