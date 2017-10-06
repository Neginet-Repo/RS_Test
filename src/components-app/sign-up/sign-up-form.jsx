import Form from 'components-core/form';
import Input from 'components-core/input';
import PropTypes from 'prop-types';
import React from 'react';
import signUpFormConfig from 'lib-app/sign-up/sign-up-form-config';

class SignUpForm extends React.Component {

    getProps() {
        return {
            className: 'sign-up-form',
            config: signUpFormConfig,
            submitButtonText: 'Sign Up'
        };
    }

    render() {
        return (
            <Form {...this.getProps()}>
                <Input name="username" />
                <Input name="password" type="password" />
                <Input name="confirmPassword" type="password" />
                <Input name="firstName" />
                <Input name="lastName" />
                <Input name="emailAddress" />
                <Input name="phoneNumber" />
                <Input name="address" />
                {this.renderAgentForm()}
                {this.renderBuyerForm()}
                {this.renderSellerForm()}
                {this.renderVendorForm()}
            </Form>
        );
    }

    renderAgentForm() {
        let agentFormNode = null;

        if (this.props.formType === 'agent') {
            // TODO: support checkbox to autofill brokerNumber
            agentFormNode = (
                <div className="sing-up-form__agent">
                    <Input name="listings" />
                    <Input name="companyName" />
                    <Input name="companyAddress" />
                    <Input name="licenseNumber" />
                    <Input name="licenseBrokerNumber" />
                 </div>
            );
        }

        return agentFormNode;
    }

    renderBuyerForm() {
        let buyerFormNode = null;

        if (this.props.formType === 'buyer') {
            buyerFormNode = (
                <div className="sign-up-form__buyer">
                    <Input name="downPayment" />
                    <Input name="methodOfPurchase" />
                    <Input name="maximumPurchasePrice" />
                    <Input name="earnestMoneyDeposit" />
                    <Input name="closingDays" />
                    <Input name="approved" />
                </div>
            );
        }

        return buyerFormNode;
    }

    renderSellerForm() {
        let sellerFormNode = null;

        if (this.props.formType === 'seller') {
            sellerFormNode = (
                <div className="sign-up-form__seller">
                    <Input name="addressOfProperty" />
                    <Input name="listPrice" />
                    <Input name="dateOfSelling" />
                </div>
            );
        }

        return sellerFormNode;
    }

    renderVendorForm() {
        return null;
    }
}

SignUpForm.propTypes = {
    formType: PropTypes.oneOf([
        'agent',
        'buyer',
        'seller',
        'user',
        'vendor'
    ])
};

export default SignUpForm;
