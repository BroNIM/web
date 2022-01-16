const sqlite = require("sqlite3")

let db = new sqlite.Database("test.db", (err) => {
    if (err){
        console.error(err.message);
    }else{
        console.log("БД подключена!")
    }

});

db.serialize(() => {
    let query = "SELECT * FROM users";
    db.each(query,(err,row) => {
        if(err){
            console.error(err.message)
        }else{
            console.log(row)
        }
    })
})

db.close();
