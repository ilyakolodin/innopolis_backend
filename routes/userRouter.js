const express = require('express')
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.post('/login', userController.addUser);
userRouter.get('/users', userController.getUsers);

module.exports = userRouter;