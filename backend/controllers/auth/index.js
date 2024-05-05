const express = require('express');
const authRouter = express();
const auth = require('./auth.controller')

authRouter.post('/login', auth.login);
authRouter.post('/signup', auth.signup);

module.exports = authRouter;