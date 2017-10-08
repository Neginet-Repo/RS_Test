import 'components-app/login/login-page.scss';

import Container from 'components-core/container';
import LoginForm from 'components-app/login/login-form';
import React from 'react';

class LoginPage extends React.Component {

    render() {
        return (
            <Container className="login-page">
                <p className="login-page__disclaimer">
                    Welcome to RS Test. Please, do not use private password, this is just a test and does not have any kind of encryption or data saving.
                </p>
                <div className="login-page__container">
                    <LoginForm />
                </div>
            </Container>
        );
    }
}

export default LoginPage;
