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

app.get("/search", (req,res)=>{
    res.send("You contacted search path");

});

app.get("/home", (req,res)=>{
    res.send("You contacted home path");

});
app.get("/{*splat}", (req,res)=>{  // Wildcard response
    res.send("This path doesn't exist");

});



app.post("/", (req,res)=>{  // Wildcard response
    res.send("You send a post request to root");

});
