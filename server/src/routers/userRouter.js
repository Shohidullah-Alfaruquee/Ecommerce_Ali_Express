const express = require('express');
const { getUsers } = require('../controllers/userController');
const userRouter = express.Router()

const users = [
    {id:1, name: 'shohidullah', age:33},
    {id:2, name: 'Hamid', age:31},
    {id:3, name: 'Sana', age:20}
 ]
 userRouter.get('/', getUsers)



 module.exports = userRouter;