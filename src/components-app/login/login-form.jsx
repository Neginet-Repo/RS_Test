import Button from 'components-core/button';
import Form from 'components-core/form';
import Input from 'components-core/input';
import navigator from 'lib-app/navigator';
import PropTypes from 'prop-types';
import React from 'react';

class LoginForm extends React.Component {

    constructor() {
        super();

        this.navigateToSignUpPage = this.navigateToSignUpPage.bind(this);
    }

    getFormData() {
        // TODO: replace this to a lib.

        return {
            username: '',
            password: ''
        };
    }

    getProps() {
        return {
            className: 'login-form',
            disableOnFormEmpty: true,
            extraButton: this.renderSignUpButton(),
            formData: this.getFormData()
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
                <Input name="username" labelText="Username" />
                <Input name="password" type="password" labelText="Password" />
            </Form>
        );
    }

    renderSignUpButton() {
        return (
            <Button buttonType="secondary" onClick={this.navigateToSignUpPage}>
                Sign up
            </Button>
        );
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
};

export default LoginForm;
