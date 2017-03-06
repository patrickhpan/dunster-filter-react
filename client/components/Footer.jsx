import React from 'react';
import { Link } from 'react-router';

import Strings from '../json/strings.json';
 
class Footer extends React.Component {
    render() {
        console.log(Strings.Footer)
        return <div id="Footer">
            <a className="underline" href={Strings.Footer.creds.link}>{Strings.Footer.creds.text}</a>
            <a className="underline" href={Strings.Footer.source.link}>{Strings.Footer.source.text}</a>
        </div>            
    }
}

export default Footer