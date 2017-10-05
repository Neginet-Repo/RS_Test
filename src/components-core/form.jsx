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
            form: props.formData
        };
    }

    cloneComponentWithProps(component, props) {
        return React.cloneElement(component, props);
    }

    getClass() {
        return classNames('form', this.props.className);
    }

    getSubmitButtonProps() {
        return {
            buttonType: 'primary',
            disabled: this.isSubmitButtonDisabled(),
            onClick: this.handleSubmit
        };
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

    isFormEmpty() {
        return _.some(this.state.form, (item) => {
            return item === '';
        });
    }

    isSubmitButtonDisabled() {
        let disabledStatus = false;

        if (this.props.disableOnFormEmpty) {
            disabledStatus = this.isFormEmpty();
        }

        return disabledStatus;
    }

    render() {
        return (
            <form className={this.getClass()}>
                {React.Children.map(this.props.children, this.renderChild)}
                {this.renderSubmitBlock()}
            </form>
        );
    }

    renderChild(child, index) {
        let childProps = child.props;
        let inputName = childProps.name;
        let newProps = {
            id: inputName,
            key: inputName,
            onChange: (event) => {
                this.handleInputChange(event, inputName);
            },
            value: this.state.form[inputName]
        };

        return (
            <FormControl name={inputName} labelText={childProps.labelText}>
                {this.cloneComponentWithProps(child, newProps)}
            </FormControl>
        );
    }

    renderSubmitBlock() {
        return (
            <div className="form__submit-block">
                {this.props.extraButton}
                <Button {...this.getSubmitButtonProps()}>Submit</Button>
            </div>
        );
    }
}

Form.propTypes = {
    disableOnFormEmpty: PropTypes.bool,
    extraButton: PropTypes.node,
    formData: PropTypes.object.isRequired
};

export default Form;
