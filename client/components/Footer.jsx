import React from 'react';
import { Link } from 'react-router';

import Strings from '../json/strings.json';
 
class Footer extends React.Component {
    render() {
        return <div id="Footer">
            <a className="underline" href="http://patrickpan.com"> Made with 😍  &nbsp; by Patrick Pan. Not affiliated with the official Hillary campaign.</a>
        </div>            
    }
}

export default Footer