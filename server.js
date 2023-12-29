const express = require("express");
const app = express();


app.all(["/", "/home", "/Home"], async (req, res)=>{
    res.send("<h1>Hello</h1>");
})

app.listen(5000, console.log("Listening at 5000"));