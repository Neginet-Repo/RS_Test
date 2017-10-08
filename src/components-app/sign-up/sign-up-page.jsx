import Container from 'components-core/container';
import React from 'react';
import Select from 'components-core/select';
import SignUpForm from 'components-app/sign-up/sign-up-form';

class SignUpPage extends React.Component {

    render() {
        return (
            <Container className="sign-up-page">
                <SignUpForm formData={this.props.location.state} />
            </Container>
        );
    }
}

export default SignUpPage;
