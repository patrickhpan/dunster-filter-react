import React from 'react';
import { Link } from 'react-router';

import Strings from '../json/strings.json';
 
class Footer extends React.Component {
    render() {
        return <div id="Footer">
            <a className="underline" href="http://patrickpan.com"> Made with 😍  by Patrick Pan.</a>
            <a className="underline" href="http://github.com/patrickhpan/im-with-her">Check out the source here.</a>
            <span>Not affiliated with the official Hillary campaign.</span>
        </div>            
    }
}

export default Footer