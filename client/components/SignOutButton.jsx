import React from 'react';

class SignOutButton extends React.Component {
    onClick() {
        window.location = "/auth/clear";
    }

    render() {
        let onClick = this.onClick;
        return <button className="SignOutButton"
                onClick={onClick}
            >
                Sign out!
        </button>
    }
}

export default SignOutButton; 