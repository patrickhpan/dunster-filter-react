import React from 'react';
import { Link } from 'react-router';

import Strings from '../json/strings.json';
 
class Header extends React.Component {
    render() {
        return <div id="Header">
            <h1>
                <Link to="/">{Strings.Header.left}</Link>
            </h1>
        </div>            
    }
}

export default Header