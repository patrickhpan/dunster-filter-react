const express = require('express');

const passport = require('./auth/init');

const auth = require('./routes/auth');

let app = express.Router();

let authRoute = auth(passport);

app.use('/auth', authRoute)

module.exports = app; 