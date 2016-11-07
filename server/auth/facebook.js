const FacebookStrategy = require('passport-facebook').Strategy;
const getPFP = require('../apis/getPFP');

function facebook(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: "http://localhost:9000/auth/fb/callback"
        },
        function (accessToken, refreshToken, profile, cb) {
            console.log("asdf")
            profile.token = accessToken;
            return cb(null, profile)

            // cb(JSON.stringify({
            //     accessToken,
            //     refreshToken,
            //     profile
            // }))
        }
    ));
    return passport;

}


module.exports = facebook;