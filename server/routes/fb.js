const express = require('express');
const getPFP = require('../apis/getPFP');

let router = express.Router();

let isAuthenticated = req => (req.session !== undefined && req.session.passport !== undefined && req.session.passport.user !== undefined && req.session.passport.user.id !== undefined)

router.get('/authenticated', (req, res) => {
    console.log(req.session)
    if (isAuthenticated(req)) {
        console.log(">>authenticated")
        res.end("true")
    } else {
        console.log(">>not authenticated")
        res.end("false")
    }
})

router.get('/picture', (req, res) => {
    if (isAuthenticated(req)) {
        console.log(">>authenticated")
        getPFP(req.session.passport.user.token, req.session.passport.user.id).then(data => {
            res.end(data)
        }).catch(console.error);
    } else {
        console.log(">>not authenticated")
        res.end()
    }
})

module.exports = router