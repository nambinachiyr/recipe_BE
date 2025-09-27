// Import express module
const express = require('express');
// Import mongoose lib
const mongoose = require('mongoose');
// Import the app module in the app file
const app = require('./app');
// Import dotenv module directcly
require('dotenv').config();

// Connecting the mongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('successfully connected')

    // listen for incoming request (start the server)
    app.listen(process.env.PORT,'0.0.0.0',()=>{
    console.log(`server is listening on http://localhost:${process.env.PORT}`)
})
})
.catch(err=>{
    console.log('Not connected ',err)
})