import request from 'request-promise';
import resolveUrl from './resolveUrl';

const url = resolveUrl('/fb/picture');

function getPFP() {
    return request(url);
}

module.exports = getPFP;