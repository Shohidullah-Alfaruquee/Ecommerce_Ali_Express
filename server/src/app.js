const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const seedRouter = require('./routers/seedRouter');
const {errorResponse}= require('./controllers/responseController')
const app = express();

const rateLimiter = rateLimit({
    windowMs: 1*60*1000, // 1 minute
    max:5,
    message: 'To many request from this IP. please try a later.'
})

// Midlewares
app.use(xssClean());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routers
app.use('/api/users', userRouter);
app.use('/api/seed', seedRouter);

app.get('/test', rateLimiter, (req, res ) => { 
    res.status(200).send({
        message: "Welcome to the server"
    })
 })



//Client error handling midleware
app.use((req, res, next) => { 
    next(createError(404, "Route not found"));
 });


 //server error handling middleware: all error finaly come here
 app.use((err, req, res, next) => { 
    return errorResponse(res, {
        statusCode:err.status,
        message:err.message
    })
  });


module.exports = app;