import 'components-core/container.scss';

import classNames from 'classnames';
import React from 'react';

class Container extends React.Component {

    getClass() {
        return classNames('container', this.props.className);
    }

    render() {
        return (
            <section className={this.getClass()}>
                {this.props.children}
            </section>
        );
    }
}

export default Container;
