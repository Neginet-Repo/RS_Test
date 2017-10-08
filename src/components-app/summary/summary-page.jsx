import Container from 'components-core/container';
import navigator from 'lib-app/navigator';
import React from 'react';
import serviceCaller from 'lib-app/service/service-caller';

class SummaryPage extends React.Component {

    constructor() {
        super();

        this.handleDone = this.handleDone.bind(this);

        this.state = {
            user: {}
        };
    }

    componentWillMount() {
        serviceCaller({
            onDone: this.handleDone,
            serviceName: 'UserDataService'
        });
    }

    handleDone(response) {
        console.log(response);
        if (response.success) {
            this.setState({
                user: response.data
            });
        } else {
            console.error('There was an error on the request, please try to login again');
        }
    }

    render() {
        return (
            <Container className="summary-page">
                Username: {this.state.user.username}
            </Container>
        );
    }
}

export default SummaryPage;
