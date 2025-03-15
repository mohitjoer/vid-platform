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
  

let vid= [
    {
        id:uuid(),
        title:"how to add animated border",
        img: "" ,
        link: "https://youtu.be/xhDTJkpmp7s"
    }
];

app.get("/",(req, res)=>{
    res.send(`welcom to the main page.`);
});

app.get("/videos",(req, res)=>{
    res.render("videos.ejs", {vid});
});

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});