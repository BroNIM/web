const sq = require("sqlite3")
const express = require("express")

async function getdata() {
    let data;
    let db = new sq.Database("db.db")


    let sqlq = "SELECT * FROM users";

    let prom = new Promise((resolve, reject) => {
        db.all(sqlq, [], (err, rows) => {
            if (err) {
                //console.log(err, 1)
                reject(err);


            } else {
                resolve(rows);
            };
        });
    });
    data = await prom;
    db.close()
    return data
};



app = express()

app.get("/", (req, res) => {
    getdata().then((data) => {
        res.send(JSON.stringify(data));
    });
})



app.listen(3000);