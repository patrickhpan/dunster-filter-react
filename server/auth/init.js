var passport = require('passport');
const facebook = require('./facebook');

facebook(passport);

module.exports = passport;