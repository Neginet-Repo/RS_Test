import _ from 'lodash';
import axios from 'axios';
import services from 'bootstrap-data/services';

const serviceCaller = (config) => {
    let service = getService(config.serviceName);

    axios({
        data: config.data,
        method: service.method,
        url: service.url
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

function getService(serviceName) {
    return _.find(services, {name: serviceName});
}

export default serviceCaller;
