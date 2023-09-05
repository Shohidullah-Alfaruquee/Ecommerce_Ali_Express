const express = require('express');
const morgan = require('morgan');
const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const isLoggedIn = (req, res, next) => { 
    let login = true;
    if(login){
        req.body.id = 101 // modify the req body. 
        next()
    }else{
        return res.status(401).json({
            message:"Please login first."
        })
    }
    console.log("Is logged in middleware");
    next()
 }

app.get('/test', (req, res ) => { 
    res.status(200).send({
        message: "Welcome to the server"
    })
 })

 app.get('/api/user', isLoggedIn, (req, res ) => { 
    console.log(req.body.id);
    res.status(200).send({
        message: "User profile is returned"
    })
 })



app.listen(3001, (req, res) => {
    console.log(`server is running at http://localhost:3001`);
 })