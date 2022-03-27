const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/1p.html")
})

app.listen(port = 3000)