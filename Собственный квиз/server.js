const express = require("express");
const nunjucks = requie("nunjucks");


const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/1p.html")
    
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/play.html")
})
app.listen(port = 3000)