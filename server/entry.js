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
let authRoute = auth(passport);
app.use('/auth', authRoute)

module.exports = app; 