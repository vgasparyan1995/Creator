function getDataForNetworkService() {
    return `import AppConstants from './../../settings/constants.js';

    class NetworkService {
    
    constructor(exception_handler_service, cache_service) {
        this._exception_handler_service = exception_handler_service;
        this._cache_service = cache_service;
    }

    makeAPIGetRequest = (url, options) => {
        options = options || {};
        options.method = AppConstants.network.network_request_methods.GET;
        return this.makeAPIRequest(url, options);
    };

    makeAPIPostRequest = (url, options) => {
        options = options || {};
        options.method = AppConstants.network.network_request_methods.POST;
        return this.makeAPIRequest(url, options);
    };

    makeAPIPutRequest = (url, options) => {
        options = options || {};
        options.method = AppConstants.network.network_request_methods.PUT;
        return this.makeAPIRequest(url, options);
    };

    makeAPIDeleteRequest = (url, options) => {
        options = options || {};
        options.method = AppConstants.network.network_request_methods.DELETE;
        return this.makeAPIRequest(url, options);
    };

    makeAPIPatchRequest = (url, options) => {
        options = options || {};
        options.method = AppConstants.network.network_request_methods.PATCH;
        return this.makeAPIRequest(url, options);
    };

    createUrl = (arg) => {
        if (Array.isArray(arg)) {
            return [AppConstants.network.REST_API_URL, ...arg].join("/");
        }
        return AppConstants.network.REST_API_URL + "/" + arg;
    };

    createQueryParams = (queryParams) => {
        return Object.keys(queryParams).reduce((accumulator, key) => {
            let item = queryParams[key];
            if (item === null || item === undefined)
                return accumulator;

            if (Array.isArray(item)) {
                for (let index = 0; index < item.length; index++) {
                    let arrItem = item[index];
                    accumulator += key + '=' + arrItem + '&';
                }
            } else {
                accumulator += key + '=' + item + '&';
            }
            return accumulator;

        }, "");
    };


    makeAPIRequest = (partUrl, options) => {
        return new Promise((resolve, reject) => {
            let url = this.createUrl(partUrl);
            options = options || {};

            if (!url) {
                return reject(AppConstants.network.network_errors.INVALID_REQUEST_PARAMS);
            }

            if (options.query_params) {
                url += '?' + this.createQueryParams(options.query_params);
            }
            if (!options.method) {
                options.method = AppConstants.network.network_request_methods.GET;
            }

            let user_token = this._cache_service.getUserToken();
            let fetch_options = {
                method: options.method,
                headers: options.headers || {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'version': 1,
                    'Authorization': user_token || null,
                }
            };


            if (options.headers) {
                fetch_options.headers = options.headers;
            }
            try {
                if (options.body) {
                    fetch_options.body = JSON.stringify(options.body);
                }
            } catch (ex) {
                return reject(AppConstants.network.network_errors.INVALID_REQUEST_PARAMS);
            }

            fetch(url, fetch_options)
                .then(async response => {

                    if (!response) {
                        return reject(AppConstants.network.network_errors.INVALID_RESPONSE_DATA);
                    }

                    const contentType = response.headers.get("content-type");

                    let data = {};
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        data = await response.json();
                    }
                    data.status = response.status;

                    let check_result = await this._exception_handler_service.execute(data);

                    try {
                        if (!check_result || !check_result.error_code) {
                            return resolve(data);
                        } else {
                            return resolve(check_result);
                        }
                    } catch (ex) {
                        return reject(AppConstants.network.network_errors.RESPONSE_PARSING_ERROR);
                    }
                }).catch(err => {
                return reject(err);
            });
        });
    }

}

export default NetworkService;

    `
}

module.exports = {
    getDataForNetworkService
}