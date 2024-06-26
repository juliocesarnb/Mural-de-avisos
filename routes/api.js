const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const posts = require('../model/posts')
const cors = require ('cors');

const options = {
    origin: "http://127.0.0.1:5500"
}

router.use(cors(options));

router.get("/all", (req, res) => { 
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    
    posts.newPost(title, description);
    
    res.send("Post adicionado");
 });

 module.exports = router;