import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    render() {
        let children = this.props.children;
        return <div id="App">
            <Header />
            {children}
            <Footer />
        </div>
    }
}

export default App;