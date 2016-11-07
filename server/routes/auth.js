const express = require('express');

function getRouter(passport) {
    let router = express.Router();

    router.get('/fb',
        passport.authenticate('facebook'));

    router.get('/fb/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });

    return router;
}

module.exports = getRouter;