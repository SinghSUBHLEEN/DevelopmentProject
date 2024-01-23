const express = require("express");
const app = express();
const https = require("https");

app.use(express.static(__dirname + "/Client/dist"));

app.all("*", (req, res) => {
    res.status(201).sendFile(__dirname + "/Client/dist/index.html");
});

app.listen(5000, console.log("Listening at 5000"));

// const handler = async (event, context) => {
//     const url = "https://onkardevelopers.onrender.com";

//     return new Promise((resolve, reject) => {
//         const req = https.get(url, (res) => {
//             if (res.statusCode === 200) {
//                 console.log("done");
//                 resolve({
//                     statusCode: 200,
//                     body: "Server pinged successfully",
//                 });
//             } else {
//                 reject(new Error(`error`));
//             }
//         });

//         req.on("error", (error) => {
//             reject(error);
//         });

//         req.end();
//     });
// };

// setInterval(handler, 810000);
