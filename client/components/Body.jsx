import React from 'react';
import { Link } from 'react-router';

import Landing from './Landing';
import Save from './Save';
import Sample from './Sample';
import Editor from './Editor';
import AuthButton from './AuthButton';
import SignOutButton from './SignOutButton';

import isAuthenticated from '../js/isAuthenticated';
import keyify from '../js/keyify';

import Strings from '../json/strings.json';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            authenticated: false
        }
    }
    componentDidMount() {
        isAuthenticated().then(result => {
            if (result === 'true') {
                this.setState({
                    authenticated: true
                })
            }
        })
    }

    render() {
        let content = this.state.authenticated ?
            [
                <Save />,
                <Editor />,
                <SignOutButton />
            ] :
            [
                <Landing />,
                <Sample />,
                <AuthButton />
            ];    

        return <div id="Body">
            {keyify(content)}
        </div>
    }
}

export default Body;