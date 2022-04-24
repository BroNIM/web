const express = require("express");
const hbs = requie("hbs");
const sq = require("sqlite3")


const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/1p.html")
    
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/play.html")
})

async function getdata(){
    let db = new sq.Database("Game.db")
}
app.listen(port = 3000)