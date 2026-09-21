// require
const express= require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));

let posts =[
    {
        username: "mohit",
        content:"I got selected for my first internship in winter which is of 55 lpa"
    },
    {
        username: "Kumar",
        content:"I love playing"
    },
    {
        username: "Paswan",
        content:"I love eating"
    }
];


app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
});
app.listen(port,()=>{
    console.log("Listening to port");
});
