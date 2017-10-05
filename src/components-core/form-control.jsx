import 'components-core/form-control.scss';

import React from 'react';

class FormControl extends React.Component {

    render() {
        return (
            <div className="form-control">
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

export default FormControl;
