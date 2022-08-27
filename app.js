const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const bodyparser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
require('./model/dbConnection');
const FeedBackModel = require("./model/Schema");


//body-parser configuration
app.use(bodyparser.json());
app.use(express.urlencoded({extended:false}));

//static folder configuration
const staticPath = path.join('__dirname',"../public");
app.use(express.static(staticPath));

//configuration of view engine
app.set('view engine','hbs');
app.set('views','./views');


app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/services",(req,res)=>{
    res.render('service');
})
app.get("/contact",(req,res)=>{
    res.render('contact');
})

app.post('/contact',async(req,res)=>{
    const data = new FeedBackModel(req.body);
    const insert = await data.save();
    console.log(insert);
    res.render('contact',{loading:`Thanks for the Registrastion ${req.body.name}`})
})

app.get("/cards",(req,res)=>{
    res.render('card');
})

app.get("/karan",(req,res)=>{
    res.render('karan');
})

app.post('/karan',(req,res)=>{
    console.log(req.body);
})
app.listen(PORT,()=>console.log(`localhost:${PORT}`));