const PORT = 3000;  
const express = require('express');

const bodyParser = require('body-parser');

const apiRoute = require('./routes/api');

const path = require("path");

const app = express();


app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, "public")));


app.get("/all", (req, res) => { 
    res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    
    posts.newPost(title, description);
    
    res.send("Post adicionado");
 });

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

