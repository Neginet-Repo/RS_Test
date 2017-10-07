import 'components-core/form.scss';

import _ from 'lodash';
import Button from 'components-core/button';
import classNames from 'classnames';
import FormControl from 'components-core/form-control';
import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderChild = this.renderChild.bind(this);

        this.state = {
            form: props.config()
        };
    }

    cloneComponentWithProps(component, props) {
        return React.cloneElement(component, props);
    }

    getClass() {
        return classNames('form', this.props.className);
    }

    getComponentProps(name) {
        return this.props.config.props[name];
    }

    getSubmitButtonProps() {
        return {
            buttonType: 'primary',
            disabled: this.isSubmitButtonDisabled(),
            onClick: this.handleSubmit
        };
    }

    getSubmitButtonText() {
        return this.props.submitButtonText || 'Submit';
    }

    handleInputChange(event, inputName) {
        let newForm = _.cloneDeep(this.state.form);

        newForm[inputName] = event.target.value;

        this.setState({
            form: newForm
        });
    }

    handleSubmit(event) {
        console.log(this.state.form);
    }

    isFormRequiredFieldsEmpty() {
        return _.some(this.state.form, (item, field) => {
            let formField = this.props.config.props[field];

            return (formField.required && item === '');
        });
    }

    isSubmitButtonDisabled() {
        let disabledStatus = false;

        disabledStatus = this.isFormRequiredFieldsEmpty();

        return disabledStatus;
    }

    render() {
        return (
            <form className={this.getClass()}>
                {React.Children.map(this.props.children, this.renderChild)}
                <div className="form__footer">
                    {this.renderExtraButtonBlock()}
                    {this.renderSubmitBlock()}
                </div>
            </form>
        );
    }

    renderChild(child, index) {
        let childNode = child;
        let childProps = _.get(childNode, 'props', {});

        if (childNode !== null) {
            if (childProps.name) {
                childNode = this.renderCopyOfComponent(childNode, index);
            } else if (childNode.type !== 'h2' && childProps.children) {
                childNode = React.Children.map(childProps.children, this.renderChild);
            }
        }

        return childNode;
    }

    renderCopyOfComponent(child, index) {
        let childProps = child.props || {};
        let inputName = childProps.name;
        let componentProps = this.getComponentProps(inputName);
        let newProps = _.extend({
            id: inputName,
            key: inputName,
            onChange: (event) => {
                this.handleInputChange(event, inputName);
            },
            value: this.state.form[inputName]
        }, componentProps);

        return (
            <FormControl name={inputName} {...componentProps}>
                {this.cloneComponentWithProps(child, newProps)}
            </FormControl>
        );
    }

    renderExtraButtonBlock() {
        return (
            <div className="form__extra-button-block">
                {this.props.extraButton}
            </div>
        );
    }

    renderSubmitBlock() {
        return (
            <div className="form__submit-block">
                <Button {...this.getSubmitButtonProps()}>{this.getSubmitButtonText()}</Button>
            </div>
        );
    }

    resetFormFields(fields) {
        let defaultForm = this.props.config();
        let newForm = _.cloneDeep(this.state.form);

        if (fields) {
            _.map(fields, fieldName => {
                newForm[fieldName] = defaultForm[fieldName];
            });
        } else {
            newForm = defaultForm;
        }

        this.setState({
            form: newForm
        });
    }
}

Form.propTypes = {
    config: PropTypes.func.isRequired,
    extraButton: PropTypes.node
};

export default Form;
