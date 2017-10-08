import 'components-app/summary/summary-page.scss';

import _ from 'lodash';
import Container from 'components-core/container';
import labels from 'bootstrap-data/labels';
import navigator from 'lib-app/navigator';
import React from 'react';
import serviceCaller from 'lib-app/service/service-caller';

class SummaryPage extends React.Component {

    constructor() {
        super();

        this.handleDone = this.handleDone.bind(this);
        this.renderResultsItem = this.renderResultsItem.bind(this);
        this.renderTypes = this.renderTypes.bind(this);

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
        console.log(response.data);
        if (response.success) {
            this.setState({
                user: response.data
            });
        } else {
            console.error('There was an error on the request, please try to login again');
            navigator.goBack();
        }
    }

    render() {
        return (
            <Container className="summary-page">
                {this.renderLoading()}
            </Container>
        );
    }

    renderLoading() {
        let loadingNode = <div>Loading...</div>;

        if (!_.isEmpty(this.state.user)) {
            loadingNode = this.renderResults();
        }

        return loadingNode;
    }

    renderResults() {
        let user = this.state.user;

        return (
            <div className="summary-content">
                <h2 className="summary-content__title">{user.username}</h2>
                <div className="summary-content__information">
                    {_.map(user.types, this.renderTypes)}
                </div>
            </div>
        );
    }

    renderResultsItem(item, index) {
        let user = this.state.user;

        return (
            <li className="information__item" key={item+index}>
                <div className="information-item__key">{labels[item]}</div> {user[item]}
            </li>
        );
    }

    renderTypes(type) {
        let types = {
            agent: {
                items: [
                    'listings',
                    'companyName',
                    'licenseNumber',
                    'licenseBrokerNumber',
                    'companyAddress'
                ],
                key: 'agent',
                title: 'Agent information'
            },
            buyer: {
                items: [
                    'downPayment',
                    'methodOfPurchase',
                    'maximumPurchasePrice',
                    'earnestMoneyDeposit',
                    'closingDays',
                    'approved'
                ],
                key: 'buyer',
                title: 'Buyer information'
            },
            seller: {
                items: [
                    'addressOfProperty',
                    'listPrice',
                    'dateOfSelling'
                ],
                key: 'seller',
                title: 'Seller information'
            },
            vendor: {
                items: [
                    'vendorType',
                    'companyName',
                    'companyAddress',
                    'vendorPhoneNumber',
                    'licenseNumber'
                ],
                key: 'vendor',
                title: 'Vendor information'
            },
            user: {
                items: [
                    'firstName',
                    'lastName',
                    'emailAddress',
                    'phoneNumber',
                    'address'
                ],
                key: 'user',
                title: 'User information'
            }
        };

        return this.renderSummaryListFor(types[type]);
    }

    renderSummaryListFor(type) {
        return (
            <div className="summary-list" key={type.key}>
                <h3 className="summary-list__title">{type.title}</h3>
                <ul className="information">
                    {_.map(type.items, this.renderResultsItem)}
                </ul>
            </div>
        );
    }
}

export default SummaryPage;
