import _ from 'lodash';
import axios from 'axios';
import navigator from 'lib-app/navigator';
import services from 'bootstrap-data/services';

const serviceCaller = (config) => {
    let service = getService(config.serviceName);
    let serviceUrl = service.url;

    if (service.method === 'GET') {
        serviceUrl = addQuery(serviceUrl);
    }

    axios({
        data: config.data,
        header: {
            'Access-Control-Allow-Origin': '*'
        },
        method: service.method,
        url: 'http://localhost:3000/' + serviceUrl
    })
        .then(response => {
            config.onDone(response.data);
        })
        .catch(error => {
            if (config.onFail) {
                config.onFail(error);
            }
        });
};

function addQuery(url) {
    return url + navigator.location.search;
}

function getService(serviceName) {
    return _.find(services, {name: serviceName});
}

export default serviceCaller;
