import { IndexRoute, Route, Router } from 'react-router-dom';
import App from 'components-core/app';
import LoginPage from 'components-app/login/login-page';
import navigator from 'lib-app/navigator';
import React from 'react';
import SignUpPage from 'components-app/sign-up/sign-up-page';
import SummaryPage from 'components-app/summary/summary-page';

class AppRoutes extends React.Component {

    render() {
        return (
            <Router history={navigator}>
                <App>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/sign-up" component={SignUpPage} />
                    <Route path="/summary" component={SummaryPage} />
                </App>
            </Router>
        );
    }
}


export default AppRoutes;
