// Listening Requests

const express = require('express');
const app = express();


let port= 3000;

app.listen(port, ()=>{
    console.log(`app is listeninig on port ${port}`);
});


// Routing

app.get("/", (req,res)=>{
    res.send("I'm IAS Mohit Kumar");

});

// app.get("/:username/:id", (req,res)=>{
//     console.log(req.params);
//     res.send("I'm IAS Mohit Kumar");

// });


// app.get("/:username/:id", (req,res)=>{
//     let{username, id}= req.params;
//     console.log(req.params);
//     res.send(`Welcome to the page of @${username}`);

// });


app.get("/:username/:id", (req,res)=>{
    let{username, id}= req.params;
    let htmlstr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlstr);

});