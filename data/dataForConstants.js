function getDataForConstants() {
    return `const AppConstants = {
    network: {
        REST_API_URL: "",
        network_request_url: {
        },
        network_request_methods: {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete',
            PATCH: 'patch',
        },
        network_errors: {
            INVALID_REQUEST_PARAMS: 'invalid_request_parameters',
            INTERNAL_ERROR: 'internal_error',
            TOKEN_EXPIRED: 'token_expired',
            BAD_REQUEST: 'bad_request',
            SUCCESS: 'success',
        }
    },
};

export default AppConstants;
`
}

module.exports = {
    getDataForConstants
}