import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Body from './components/Body';
import About from './components/About';

let routes = <Route path="/" component={App}>
    <IndexRoute component={Body} />
    <Route path="/about" component={About} />
</Route>

export default routes;