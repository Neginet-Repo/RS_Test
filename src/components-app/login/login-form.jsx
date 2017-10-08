import Button from 'components-core/button';
import Form from 'components-core/form';
import Input from 'components-core/input';
import loginFormConfig from 'lib-app/login/login-form-config';
import navigator from 'lib-app/navigator';
import PropTypes from 'prop-types';
import React from 'react';
import serviceCaller from 'lib-app/service/service-caller';

class LoginForm extends React.Component {

    constructor() {
        super();

        this.handleDone = this.handleDone.bind(this);
        this.handleValidFormSubmitted = this.handleValidFormSubmitted.bind(this);
        this.navigateToSignUpPage = this.navigateToSignUpPage.bind(this);

        this.state = {
            error: ''
        };
    }

    getProps() {
        return {
            className: 'login-form',
            config: loginFormConfig,
            error: this.state.error,
            extraButtonLabel: 'Sign Up',
            extraButtonProps: this.getExtraButtonProps(),
            onValidFormSubmitted: this.handleValidFormSubmitted,
            submitButtonText: 'Login'
        };
    }

    getExtraButtonProps() {
        return {
            buttonType: 'secondary',
            onClick: this.navigateToSignUpPage,
            type: 'button'
        };
    }

    handleValidFormSubmitted(form) {
        serviceCaller({
            data: form,
            onDone: this.handleDone,
            serviceName: 'LoginService'
        });
    }

    handleDone(response) {
        if (response.success) {
            let username = response.data.username;

            navigator.push({
                pathname: 'summary',
                search: '?username=' + username
            });
        } else {
            this.setState({error: response.error});
        }
    }

    navigateToSignUpPage() {
        navigator.push({
            pathname: 'sign-up'
        });
    }

    render() {
        return (
            <Form {...this.getProps()}>
                <Input name="username" />
                <Input name="password" />
            </Form>
        );
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
};

export default LoginForm;
