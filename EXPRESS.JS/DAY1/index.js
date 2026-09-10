// Listening Requests

const express = require('express');
const app = express();


let port= 3000;

app.listen(port, ()=>{
    console.log(`app is listeninig on port ${port}`);
});


// Sending Response


app.use((req,res)=>{
    console.log("request received");

    res.send({
        name : "Apple",
        color : "Red"
    });
});

 