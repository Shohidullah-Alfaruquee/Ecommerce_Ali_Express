const express = require('express');
const morgan = require('morgan');
const app = express();

// Midlewares
app.use(morgan('dev'));

app.get('/', (req, res ) => { 
    res.status(200).send({
        message: "Welcome to the server"
    })
 })

 app.get('/test', (req, res ) => { 
    res.status(200).send({
        message: "Api is working fine"
    })
 })
app.get('/products', (req, res ) => { 
    res.status(200).send({
        message: "products are returned"
    })
 })

app.listen(3001, (req, res) => {
    console.log(`server is running at http://localhost:3001`);
 })