const FacebookStrategy = require('passport-facebook').Strategy;

function facebook(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: "http://localhost:9000/auth/fb/callback"
        },
        function (...args) {
            console.log(args)
            // User.findOrCreate({
            //     facebookId: profile.id
            // }, function (err, user) {
            //     return cb(err, user);
            // });
        }
    ));
    return passport;

}


module.exports = facebook;