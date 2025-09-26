// Import express module
const express = require('express');
// Import mongoose lib
const mongoose = require('mongoose');
// Import dotenv module directcly
require('dotenv').config();

// Create app 
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello recipes")
});

// listen for incoming request (start the server)
app.listen(3007,'localhost',()=>{
    console.log(`server is listening on http://localhost:3007`)
})

// Connecting the mongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('successfully connected')
})
.catch(err=>{
    console.log('Not connected ',err)
})