import 'components-app/login/login-page.scss';

import Container from 'components-core/container';
import LoginForm from 'components-app/login/login-form';
import React from 'react';

class LoginPage extends React.Component {

    render() {
        return (
            <Container className="login-page">
                <div className="login-page__container">
                    <LoginForm />
                </div>
            </Container>
        );
    }
}

export default LoginPage;
