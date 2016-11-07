const express = require('express');
const expressSession = require('express-session');
const passport = require('./auth/init');

let app = express.Router();
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize())
app.use(passport.session())

const auth = require('./routes/auth');
const picture = require('./routes/picture');

let authRoute = auth(passport);
app.use('/auth', authRoute)
app.use('/picture', picture);

module.exports = app;