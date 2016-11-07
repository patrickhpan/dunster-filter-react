const express = require('express');

function getRouter(passport) {
    let router = express.Router();

    router.get('/fb',
        passport.authenticate('facebook'));

    router.get('/fb/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/error'
        }),
        function (req, res) {
            console.log(req.session)
            res.redirect('/picture/getImage');
        });

    return router;
}

module.exports = getRouter;