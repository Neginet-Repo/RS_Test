import 'components-app/sign-up/sign-up-page.scss';

import Container from 'components-core/container';
import React from 'react';
import SignUpForm from 'components-app/sign-up/sign-up-form';

class SignUpPage extends React.Component {

    constructor() {
        super();

        this.state = {
            applicationType: 'buyer'
        };
    }

    render() {
        return (
            <Container className="sign-up-page">
                {this.renderSignUpForm()}
            </Container>
        );
    }

    renderSignUpForm() {
        let applicationType = this.state.applicationType;

        return (
            <div className="sign-up-page__form">
                <div className="form-header">
                    You are going to apply as a
                    <span className="form-header__type"> {applicationType}</span>
                </div>
                <SignUpForm formType={applicationType} />
            </div>
        );
    }
}

export default SignUpPage;
