import 'components-core/select.scss';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

class Select extends React.Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.renderOption = this.renderOption.bind(this);
    }

    getOptionProps(option) {
        return {
            disabled: option.disabled,
            key: option.key || option.value,
            value: option.value
        };
    }

    getProps() {
        let props = this.props;

        return {
            className: 'select',
            disabled: props.disabled,
            name: props.name,
            onChange: this.handleChange,
            required: props.required,
            value: props.value
        };
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    render() {
        return (
            <select {...this.getProps()}>
                {this.props.items.map(this.renderOption)}
            </select>
        );
    }

    renderOption(option, index) {
        return <option {...this.getOptionProps(option)}>{option.content}</option>;
    }
}

Select.propTypes = {
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string,
            disabled: PropTypes.bool,
            value: PropTypes.string.isRequired
        })
    ),
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    value: PropTypes.string
};

export default Select;
