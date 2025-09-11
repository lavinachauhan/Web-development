// ye file server ki trha act kregi
// ye express jise humne require kiya h ye ek  h function hai
const express = require("express");
// express function hume kuch value return krega
// server side wali web application isi app ke through bna rhe honge
const app = express();
console.dir(app);
let port = 8080;
// port endpoints of a network connection -> used to exchange information between a web server and a web client
// app.listen(port,  callback) incoming request ke liye listen krta h
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});

app.get("/", (req, res) => {
    res.send("Hello Iam root");
});

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let username = req.params;
    // res.send(`Hello, Iam root ${username.username}`);
    let html = `<p>heloo welcome to page ${username.username}`;
    res.send(html);
})

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    let html = `<p>hello ${q}</p>`;
    // res.send(`search results for query: ${q}`);
    res.send(html);
});

// app.get("/contact", (req, res) => {
//     res.send("Your are contacted to contact section");
// });

// app.get("/about", (req, res) => {
//     res.send("Your are contacted to about section");
// });

// app.get("/article", (req, res) => {
//     res.send("Your are contacted to article section");
// });


// app.all("*", (req, res) => {
//     res.status(404).send("This path doesn't exist");
// });
// app.use((req, res) => {
//     res.status(404).send("This path doesn't exist");
// });

// app.post("/", (req, res) => {
    // res.send("You sent a post request to root");
// })
// app.use((req, res) => {
//     console.log(req);
//     console.log("Request received");
//     // res.send("This is a basic reaponse");
//     // res.send({
//     //     name :"apple",
//     //     color : "red"
//     // })
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li>";
//     res.send(code);
// });