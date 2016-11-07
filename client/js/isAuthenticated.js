import request from 'request-promise';
import resolveUrl from './resolveUrl';

const url = resolveUrl('/fb/authenticated');

function isAuthenticated() {
    return request(url);
}

module.exports = isAuthenticated;