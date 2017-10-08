import 'components-app/sign-up/sign-up-form.scss';

import Form from 'components-core/form';
import Input from 'components-core/input';
import navigator from 'lib-app/navigator';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'components-core/select';
import serviceCaller from 'lib-app/service/service-caller';
import signUpFormConfig from 'lib-app/sign-up/sign-up-form-config';

class SignUpForm extends React.Component {

    constructor() {
        super();

        this.form = null;
        this.handleAddAnotherApplication = this.handleAddAnotherApplication.bind(this);
        this.handleApplicationTypeChange = this.handleApplicationTypeChange.bind(this);
        this.handleValidFormSubmitted = this.handleValidFormSubmitted.bind(this);

        this.state = {
            applicationType: 'user',
            userFormCompleted: false
        };
    }

    componentDidMount() {
        let formData = _.get(this.props, 'formData', {});

        if (!_.isEmpty(formData) && formData.username) {
            this.setState({
                applicationType: this.getNextApplicationType(formData),
                userFormCompleted: true
            });
        }
    }

    getNextApplicationType(form) {
        let types = form.types;
        let availableTypes = [
            'agent',
            'buyer',
            'seller',
            'vendor',
            'user'
        ];

        return _.head(_.difference(availableTypes, types));
    }

    getProps() {
        return {
            config: signUpFormConfig,
            extraButtonLabel: 'Add another application',
            extraButtonProps: {
                disabledOnEmpty: true,
                onClick: this.handleAddAnotherApplication
            },
            formData: this.props.formData,
            onValidFormSubmitted: this.handleValidFormSubmitted,
            ref: (form) => this.form = form,
            submitButtonText: 'Sign Up'
        };
    }

    getSelectProps() {
        let types = _.get(this.props, 'formData.types', []);

        return {
            items: [
                {
                    content: 'Agent',
                    disabled: types.includes('agent'),
                    value: 'agent'
                },
                {
                    content: 'Buyer',
                    disabled: types.includes('buyer'),
                    value: 'buyer'
                },
                {
                    content: 'Seller',
                    disabled: types.includes('seller'),
                    value: 'seller'
                },
                {
                    content: 'Vendor',
                    disabled: types.includes('vendor'),
                    value: 'vendor'
                },
                {
                    content: 'User',
                    disabled: (this.state.userFormCompleted),
                    value: 'user'
                },
            ],
            onChange: this.handleApplicationTypeChange,
            value: this.state.applicationType
        };
    }

    handleAddAnotherApplication(form) {
        let applicationType = this.state.applicationType;
        let types = _.get(this.props, 'formData.types', []);

        if (types.length === 4) {
            this.handleValidFormSubmitted(form);
        } else {
            types.push(applicationType);

            if (applicationType !== 'user' && types.length === 1) {
                types.push('user');
            }

            navigator.replace({
                pathname: 'sign-up',
                state: _.extend(form, {types: types})
            });
        }
    }

    handleApplicationTypeChange(event) {
        this.setState({
            applicationType: event.target.value
        });
    }

    handleDone(response) {
        let data = response.data;

        if (response.success) {
            navigator.replace({
                pathname: 'summary',
                search: '?username=' + data.username
            });
        }
    }

    handleValidFormSubmitted(form) {
        let applicationType = this.state.applicationType;
        let types = _.get(this.props, 'formData.types', []);

        types.push(applicationType);

        if (applicationType !== 'user' && types.length === 1) {
            types.push('user');
        }

        serviceCaller({
            data: _.extend(form, {types: types}),
            onDone: this.handleDone,
            serviceName: 'SignUpService'
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
                    Complete the form to sign up to our system with an specific application. If you want to sign up with other type of application, you can press "Add another application" button below.
                </p>
                <p className="sign-up-form__disclaimer">
                    Keep in mind that changing the way you apply is going to reset the current form information.
                </p>
                <Form {...this.getProps()}>
                    {this.renderUserForm()}
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

    renderUserForm() {
        let userFormNode = null;

        if (this.state.userFormCompleted) {
            userFormNode = (
                <div className="sign-up-form__user">
                    <Input name="username" readOnly />
                </div>
            );
        } else {
            userFormNode = (
                <div className="sign-up-form__user">
                    <Input name="username" />
                    <Input name="password" />
                    <Input name="firstName" />
                    <Input name="lastName" />
                    <Input name="emailAddress" />
                    <Input name="phoneNumber" />
                    <Input name="address" />
                </div>
            );
        }

        return userFormNode;
    }
}

SignUpForm.defaultProps = {
    formData: {}
};

SignUpForm.propTypes = {
    formData: PropTypes.object
};

export default SignUpForm;
