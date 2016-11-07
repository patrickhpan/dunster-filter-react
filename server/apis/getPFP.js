const request = require('request-promise');

function getPFP(token, id) {
    return request(`http://graph.facebook.com/v2.8/${id}/picture`);
}

module.exports = getPFP