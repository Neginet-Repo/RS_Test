import 'components-app/login/login-page.scss';

import Container from 'components-core/container';
import LoginForm from 'components-app/login/login-form';
import React from 'react';

import serviceCaller from 'lib-app/service/service-caller';

class LoginPage extends React.Component {

    componentDidMount() {
        serviceCaller({
            serviceName: 'JsonTest',
            onDone: this.handleDone.bind(this)
        });
    }

    handleDone(response) {
        console.log(response);
    }

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
