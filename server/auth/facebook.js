const FacebookStrategy = require('passport-facebook').Strategy;
const getPFP = require('../apis/getPFP');

function facebook(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: "http://imwithher.patrickpan.com/auth/fb/callback"
        },
        function (accessToken, refreshToken, profile, cb) {
            profile.token = accessToken;
            return cb(null, profile)
        }
    ));
    return passport;

}


module.exports = facebook;