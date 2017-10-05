import 'components-core/input.scss';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {

    getProps() {
        let props = this.props;

        return {
            className: 'input',
            id: props.id,
            name: props.name,
            onChange: props.onChange,
            placeholder: props.placeholder,
            type: props.type || 'text',
            value: props.value
        };
    }

    render() {
        return <input {...this.getProps()} />;
    }
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

export default Input;
