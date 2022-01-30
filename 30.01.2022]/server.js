const sq = require("sqlite3");
const express = require("express");
const nunjucks = require("nunjucks")



const app = express();

async function getdata(typeq,dataq) {
    let typequeryes = {
        "all":"SELECT * FROM users",
        "search":"SELECT * FROM users WHERE id=?"
    }
    let sqlq = typequeryes[typeq]
    let db = new sq.Database("database.db")


   let prom= new Promise((resolve,reject)=> {
       db.all(sqlq,(err,rows)=>{
        if(true){
            resolve("rows")
        }else if ("err"){
             reject("error")
        }
       })
    
   })
   let result = await prom;
   db.close();
   return result;
}

app.get("/", function(req,res){
    getdata("all",[]).then((data)=>{
        let templates = {
            "colums":Object.keys(data[0]),
            "rows":data
        }
        console.log(templates);
        res.send(templates);
    })
})

app.get("/:typeq",function(req,res){
    let data = Object.values(req.query);
    let typeq = req.params.typeq;   
    getdata("search",data).then((data)=>{
        let templates = {
            "colums":Object.keys(data[0]),
            "rows":data
        }
        console.log(templates);
        res.send(templates);
    })
})



app.listen(3000);