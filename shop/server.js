const { response } = require("express");
const express = require("express")
const hbs = require("hbs")



const app = express ()

app.use(express.static(__dirname + "/"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/htm/1p.html");
});


app.get("/",function(req,res){
    res.sendFile(__dirname + "/htm/partner.html")
});

app.get("/product/:rofl",function(req,res){
    let a = req.params.rofl;
    let jq = data.product[a];
    res.render("1p.hbs",jq);
})

app.get("/product2/:rofl2",function(req,res){
    let b = req.params.rofl2;
    let jqe = data.product2[b];
    res.render("2p.hbs",jqe);
})

let product = {

    "name":"Электромагнит к ТКП-300-МП-301 220В",
    "summ":"38,660.14 рублей",
    "art":"00000000356",
    "pro":"ЭнергоТехКомплект",
    "img":"small_magnitmp.jpg",
}

let product2 = {

    "name":"Электромагнит МИС 5100 220В 50Гц",
    "summ":"5,300 руб",
    "art":"УТ000003144",
    "pro":"ЭнергоТехКомплект",
    "img":"small_mis-3100.jpg",
}



app.listen(port=3000,function(){
    console.log("Сервер запущен....");
});


