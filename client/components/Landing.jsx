import React from 'react';
import strings from '../json/strings.json'
    
class Landing extends React.Component {
    render() {
        return <div className="above">
            {strings.Landing.text}
        </div>
    }
}

export default Landing