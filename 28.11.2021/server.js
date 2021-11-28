const express = require("express");
const app = express();

let names = {
    "Dmitriy":"Shapovalov"
}

app.use(express.static(__dirname + "/"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/class.html");
});

app.get("/test",function (req,res){
    let data = req.query;
    console.log(data);
    if (data.name in names){
        res.send("Hello," + names[data.name]);
    } else {
        res.send("Hello, Nigga");
    };
    
});

