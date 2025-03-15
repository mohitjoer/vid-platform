const express = require("express");
const app = express();
const port = 3000 ;
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride =require("method-override");


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));    

let vid= [];

app.get("video list",(req, res)=>{
    res.send(`welcom to the main page.`);
});

app.get("/home",(req, res)=>{
    res.send(`this is home.`);
});

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});