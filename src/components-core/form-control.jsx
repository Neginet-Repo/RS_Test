import 'components-core/form-control.scss';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class FormControl extends React.Component {

    getClass() {
        let inputSize = this.props.inputSize;

        return classNames('form-control', {
            'form-control--tiny': (inputSize === 'tiny'),
            'form-control--small': (inputSize === 'small'),
            'form-control--medium': (inputSize === 'medium'),
            'form-control--large': (inputSize === 'large')
        });
    }

    render() {
        return (
            <div className={this.getClass()}>
                <label className="form-control__label" htmlFor={this.props.name}>
                    {this.props.labelText}
                </label>
                <div className="form-control__component">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

FormControl.propTypes = {
    inputSize: PropTypes.oneOf([
        'tiny',
        'small',
        'medium',
        'large'
    ]),
    labelText: PropTypes.string.isRequired
};

export default FormControl;
