const express = require("express");
const app = express();


app.use(express.static(__dirname + "/"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/class.html");
});

app.get("/class",function(req,res){
    let data = req.query;
    console.log(data);
    if
});

app.listen(3000);