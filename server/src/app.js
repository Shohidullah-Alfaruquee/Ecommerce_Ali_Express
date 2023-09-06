const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/test', (req, res ) => { 
    res.status(200).send({
        message: "Welcome to the server"
    })
 })

 app.get('/api/user', (req, res ) => { 
    console.log(req.body.id);
    res.status(200).send({
        message: "User profile is returned"
    })
 })

//Client error handling midleware
app.use((req, res, next) => { 
    next(createError(404, "Route not found"));
 });


 //server error handling middleware: all error finaly come here
 app.use((err, req, res, next) => { 
    return res.status(err.status||500).json({
        success: false,
        message: err.message,
    })
  });


module.exports = app;