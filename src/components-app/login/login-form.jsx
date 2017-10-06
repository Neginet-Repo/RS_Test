import Button from 'components-core/button';
import Form from 'components-core/form';
import Input from 'components-core/input';
import loginFormConfig from 'lib-app/login/login-form-config';
import navigator from 'lib-app/navigator';
import PropTypes from 'prop-types';
import React from 'react';

class LoginForm extends React.Component {

    constructor() {
        super();

        this.navigateToSignUpPage = this.navigateToSignUpPage.bind(this);
    }

    getProps() {
        return {
            className: 'login-form',
            config: loginFormConfig,
            extraButton: this.renderSignUpButton(),
            submitButtonText: 'Login'
        };
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

    renderSignUpButton() {
        return (
            <Button buttonType="secondary" onClick={this.navigateToSignUpPage}>
                Sign Up
            </Button>
        );
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
};

export default LoginForm;
