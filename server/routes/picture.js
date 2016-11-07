const express = require('express');
const getPFP = require('../apis/getPFP');

let router = express.Router();

router.get('/getImage', (req, res) => {
    // console.log(req.session.passport.user.token, req.session.passport.user.id)
    getPFP(req.session.passport.user.token, req.session.passport.user.id).then(data => {
        // res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data)
    }).catch(console.error);
})

module.exports = router