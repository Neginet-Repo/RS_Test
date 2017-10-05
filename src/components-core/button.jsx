import 'components-core/button.scss';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    getClass() {
        let props = this.props;
        let buttonType = props.buttonType;
        let disabled = props.disabled;

        return classNames('button', {
            'button__primary': (buttonType === 'primary'),
            'button__primary--disabled': (buttonType === 'primary' && disabled),
            'button__secondary': (buttonType === 'secondary')
        });
    }

    getProps() {
        let props = this.props;

        return {
            className: this.getClass(),
            disabled: props.disabled,
            onClick: this.handleClick
        };
    }

    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();

        this.props.onClick(event);
    }

    render() {
        return (
            <button {...this.getProps()}>
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    buttonType: 'secondary'
};

Button.propTypes = {
    buttonType: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func
};

export default Button;
