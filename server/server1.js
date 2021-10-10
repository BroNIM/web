const { response } = require("express");
const express = require("express")

const app = express();
const router = express.Router();

app.get("/",function(request,response){
    //response.setHeader("Content-Type","text/html");
    response.sendFile(__dirname + "/index1.html");
});

router.use("newuser/:name/:year",function(request,response){
    let name = request.params.name;
    let year = Number(request.params.year);

    response.send(`Привет,${name}! ТЫ родился в ${year}, сейчас тебе ${2021-year} `);
});

app.listen(port=3000,function(){
    console.log("Сервер запущен....");
});
