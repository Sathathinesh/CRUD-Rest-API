const express = require('express');
const mongoose = require('mongoose');
// for routing aliens js
const aliens = require('./routers/aliens');

const url = 'mongodb://localhost/thineshAlien';

const app = express();

mongoose.connect(url,{useNewUrlParser:true});

const con = mongoose.connection;

con.on('open',() =>{
    console.log('connected ...........');
});


app.use(express.json());

app.use('/aliens',aliens);

app.listen(1111,function(){
    console.log('server start');
});

