import 'components-app/sign-up/sign-up-form.scss';

import Form from 'components-core/form';
import Input from 'components-core/input';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'components-core/select';
import signUpFormConfig from 'lib-app/sign-up/sign-up-form-config';

class SignUpForm extends React.Component {

    constructor() {
        super();

        this.form = null;
        this.handleApplicationTypeChange = this.handleApplicationTypeChange.bind(this);

        this.state = {
            applicationType: 'user'
        };
    }

    getFormFieldsFor(formType) {
        let formFields = {
            agent: [
                'listings',
                'companyName',
                'companyAddress',
                'licenseNumber',
                'licenseBrokerNumber'
            ],
            buyer: [
                'downPayment',
                'methodOfPurchase',
                'maximumPurchasePrice',
                'earnestMoneyDeposit',
                'closingDays',
                'approved'
            ],
            seller: [
                'addressOfProperty',
                'listPrice',
                'dateOfSelling'
            ],
            vendor: [
                'vendorType',
                'companyName',
                'companyAddress',
                'vendorPhoneNumber',
                'licenseNumber'
            ],
            user: []
        };

        return formFields[formType];
    }

    getProps() {
        return {
            config: signUpFormConfig,
            ref: (form) => this.form = form,
            submitButtonText: 'Sign Up'
        };
    }

    getSelectProps() {
        return {
            items: [
                {
                    content: 'Agent',
                    value: 'agent'
                },
                {
                    content: 'Buyer',
                    value: 'buyer'
                },
                {
                    content: 'Seller',
                    value: 'seller'
                },
                {
                    content: 'Vendor',
                    value: 'vendor'
                },
                {
                    content: 'User',
                    value: 'user'
                },
            ],
            onChange: this.handleApplicationTypeChange,
            value: this.state.applicationType
        };
    }

    handleApplicationTypeChange(event) {
        this.form.resetFormFields(this.getFormFieldsFor(event.target.value));

        this.setState({
            applicationType: event.target.value
        });
    }

    render() {
        return (
            <div className="sign-up-form">
                <div className="form-header">
                    You are going to apply as
                    <div className="form-header__type">
                        <Select {...this.getSelectProps()} />
                    </div>
                </div>
                <p className="sign-up-form__disclaimer">
                    Complete the form to sign up to our system with an specific application. If you want to sign up with other type of application, after completing this form, select the option "Add another application".
                </p>
                <p className="sign-up-form__disclaimer">
                    Keep in mind that changing the way you apply is going to reset the current form information.
                </p>
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
            </div>
        );
    }

    renderAgentForm() {
        let agentFormNode = null;

        if (this.state.applicationType === 'agent') {
            agentFormNode = (
                <div className="sing-up-form__agent">
                    <h2 className="sign-up-form__subtitle">Agent application</h2>
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

        if (this.state.applicationType === 'buyer') {
            buyerFormNode = (
                <div className="sign-up-form__buyer">
                    <h2 className="sign-up-form__subtitle">Buyer application</h2>
                    <Input name="downPayment" />
                    <Select name="methodOfPurchase" />
                    <Input name="maximumPurchasePrice" />
                    <Input name="earnestMoneyDeposit" />
                    <Input name="closingDays" />
                    <Select name="approved" />
                </div>
            );
        }

        return buyerFormNode;
    }

    renderSellerForm() {
        let sellerFormNode = null;

        if (this.state.applicationType === 'seller') {
            sellerFormNode = (
                <div className="sign-up-form__seller">
                    <h2 className="sign-up-form__subtitle">Seller application</h2>
                    <Input name="addressOfProperty" />
                    <Input name="listPrice" />
                    <Input name="dateOfSelling" />
                </div>
            );
        }

        return sellerFormNode;
    }

    renderVendorForm() {
        let vendorFormNode = null;

        if (this.state.applicationType === 'vendor') {
            vendorFormNode = (
                <div className="sign-up-form__vendor">
                    <h2 className="sign-up-form__subtitle">Vendor application</h2>
                    <Select name="vendorType" />
                    <Input name="companyName" />
                    <Input name="companyAddress" />
                    <Input name="vendorPhoneNumber" />
                    <Input name="licenseNumber" />
                </div>
            );
        }

        return vendorFormNode;
    }
}

export default SignUpForm;
