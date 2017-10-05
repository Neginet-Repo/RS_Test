import Header from 'components-core/header';
import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
