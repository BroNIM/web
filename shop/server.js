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

app.get("/",function(req,res){
    res.sendFile(__dirname + "/htm/1p.hbs")
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

app.get("/product2/:rofl3",function(req,res){
    let c = req.params.rofl3;
    let re = data.product2[c];
    res.render("3p.hbs",re);
})

app.get("/product2/:rofl4",function(req,res){
    let d = req.params.rofl4;
    let reqs = data.product2[d];
    res.render("4p.hbs",reqs);
})


let product = {

    "name":"Электромагнит к ТКП-300-МП-301 220В",
    "summ":"38,660.14 рублей",
    "art":"00000000356",
    "pro":"ЭнергоТехКомплект",
    "img":"small_magnitmp.jpg",
}


let product2 = {

    "name2":"Электромагнит МИС 5100 220В 50Гц",
    "summ2":"5,300 руб",
    "art2":"УТ000003144",
    "pro2":"ЭнергоТехКомплект",
    "img2":"small_mis-3100.jpg",
}

let product3 = {
    "nam3":"Неодимовый магнит прямоугольник 10х5х2 мм",
    "summ3":"11.70  ₽",
    "art3":"1272072",
    "pro3":"Мир Магнитов",
    "img3":"2f6f5241284f6f8038cee8459164cce3.jpg",
}

let product4 = {
    "nam4":"D 10х5, N35H, Магнит диск до 2.45 кг (покрытие Ni)",
    "summ4":"63 ₽",
    "art4":"528275399",
    "pro4":"Ningbo Ketian Magnet",
    "img4":"DOC005300191.jpg",
}



app.listen(port=3000,function(){
    console.log("Сервер запущен....");
});


