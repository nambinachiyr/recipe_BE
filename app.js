// Import express module
const express = require('express');
const router = require('./routes/recipesPlan_Routes');

// Create app 
const app = express();

// To parse the data
app.use(express.json())
app.use('/recipes',router)
module.exports = app