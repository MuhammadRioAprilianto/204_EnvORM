const express = require('express');
const app = express();
const PORT = 3000;
const dB = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: false 
}));

