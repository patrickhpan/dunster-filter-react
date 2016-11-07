import React from 'react';

class AuthButton extends React.Component {
    onClick() {
        window.location = "/auth/fb";
    }

    render() {
        let onClick = this.onClick;
        return <button className="AuthButton"
                onClick={onClick}
            >
            Sign in with Facebook
        </button>
    }
}

export default AuthButton; 