const express = require("express");
const app = express();

app.use(express.static(__dirname + "/client/dist"));

app.all("*", (req, res) => {
    res.status(201).sendFile(__dirname + "/client/dist/index.html");
});

app.listen(5000, console.log("Listening at 5000"));
