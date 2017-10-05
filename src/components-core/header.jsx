import 'components-core/header.scss';

import appData from 'bootstrap-data/app-data';

import React from 'react';

class Header extends React.Component {

    getAppName() {
        return appData.appName;
    }

    render() {
        return (
            <header className="header">
                <h1 className="header__title">{this.getAppName()}</h1>
            </header>
        );
    }
}

export default Header;
