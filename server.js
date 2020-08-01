//imports
const express = require('express');
const dotenv = require('dotenv').config(); //import dotenv and parse ".env" file and add it to process.env

const app = express();//init express app
const PORT = process.env.PORT || 3000; //read port from .env && fallback to 3000 if .env is not configured


//start the server and listen for incomming HIT
app.listen(PORT,(err)=>{
    if(err){
        throw err;
    }
    console.log(`server running on port ${PORT}`);
})