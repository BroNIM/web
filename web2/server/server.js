const express = require("express");

const app = express();



let users = {
    "admin":"asd123",
    "none":"выпендрежник"
}

app.use(function(req,res,next){
    next();
})

app.get("/", function (req,res){
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/test",function(req,res){
    let data = req.query;
    let login = data.login;
    let password = data.password;
    if(login in users){
        if (users[login]== pass){
            res.send("Welcome to the club buddy!")
        } else{
            res.send("Wrong password!")
        }
    } else{
        res.sendStatus(418);
    };
    res.send("k");
})

app.get("/math1",function(req,res){
    let data = req.query;
    let num = data.num;
    let num2 = data.num2;
    if(num || num2 == Number){
        app.get(num + num2)
    } else if (num || num2 == isNaN){
        res.redirect("/math");
    }
})

app.get("/:page",function(req,res){
    let file = req.params.page + ".html";
    res.sendFile(__dirname + "/public/" + file)
})



app.listen(port=3000,function(){
    console.log("Server is on..")
    console.log(__dirname,__filename)

})