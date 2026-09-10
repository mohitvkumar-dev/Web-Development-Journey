// Listening Requests

const express = require('express');
const app = express();


let port= 3000;

app.listen(port, ()=>{
    console.log(`app is listeninig on port ${port}`);
});


// Routing

app.get("/:username/:id", (req,res)=>{
    let{username, id}= req.params;
    let htmlstr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlstr);

});


app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1> Nothing Searched</h1>");
    }
    res.send(`These are search results for query : ${q}`);
});