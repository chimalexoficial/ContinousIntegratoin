const express = require('express')
const path = require('path');
const app = express();
const usersRouter = require('./routes/users.route')


app.use(express.json()); //middleware pone json en eq.body
app.use(usersRouter);
module.exports = app;