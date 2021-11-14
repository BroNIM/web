const express = require("express")

const app =express();

app.use(express.static(__dirname + "/static"))

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/templates/index.html")
})

app.listen(port=3000)