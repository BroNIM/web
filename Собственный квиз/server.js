const express = require("express");
const hbs = require("hbs");
const sqlite3 = require('sqlite3').verbose();


const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/1p.html")
    
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/Sign_up.html")
    
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/templates/Sign_up.html")
    
})


async function getdata(query,log,pass){
    let dataq = {
        auth:`SELECT * FROM login+passwords WHERE Login = ? and Passwords`
    }
    let db = new sqlite3.Database("login+passwords.db");
    var promise= new Promise(function (resolve,reject){
        db.all(dataq[query], [log,pass],function(err,row){
            if(err){
                reject(err);
            } 
            else {
                resolve(row);
            }
        })
    })
    let result1 = await promise;
    db.close();
    return result1
};

async function registration(query,log,pass){
    let dataq = {
        reg:`INSERT INTO login+passwords (ID, Login, Passwords) VALUES (NULL, ?, ?)`,
        search:`SELECT * FROM login+passwords WHERE Login = ?`,
    }
    let db = new sqlite3.Database("login+passwords.db");
    var promise_reg = new Promise(function(resolve,reject){
        db.all(dataq["search"], [log], function(err,row){
            if (err) {
                reject(err)
            } else if (row.length > 0 ) {
                console.log(row)
                resolve("Такой пользователь уже есть")
            } else {
                db.run(dataq[query], [ log,pass],function(err){
                    if (err){
                        reject(err);
                    }else {
                        resolve("K")
                    }
                })
            }
        })
    })
    let result = await promise_reg;
    db.close();
    return result
    
}

app.post("/auth", urlencodedParser, (req, res) => {
    password = req.body.pass;
    username = req.body.username;
    body__req = "authorization";
    getdata(body__req, password, username).then((rows) => {
        if (rows.length > 0) {
            req.session.user_auth = true;
            res.redirect("player");
        } else if (rows.length == 0) {
            res.send('Ошибка');
        }
    }, (err) => {
        console.log(err + " Такого пользователя нет");
    });
});
app.listen(port = 3000)