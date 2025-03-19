const express = require('express')
const db = require("./config/db");
const student = require('./models/students');
const app = express();
const port = 8000;


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('form')
})

app.listen(port,() => console.log('server started..',port));