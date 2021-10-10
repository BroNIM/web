const { response } = require("express");
const express = require("express")

const app = express();
//const router = express.Router();

app.use(function(request,response,next){
    console.log("Юзер подключился к серверу...");
    next();
    //response.send("Welcome");
});

app.use("/math/:a/:b", function(request,response){
    let a = Number(request.params.a);
    let b = Number(request.params.b);
    response.send(`Сумма чисел ${a} и ${b} равна ${a+b}`);
});


app.get("/",function(request,response){
    //response.setHeader("Content-Type","text/html");
    response.sendFile(__dirname + "/index1.html");
});

app.get("/about",function(request,response){
    response.send("Human");
});

app.use(function(request,response){
    response.statusCode = 404;
    response.send("Страница не найдена");
});

app.listen(port=3000,function(){
    console.log("Сервер запущен....");
});