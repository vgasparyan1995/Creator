const { upperCaseFisrt } = require('./../helper');

function getDataForSDK(type) {
    const typeFirstUpperCase = upperCaseFisrt(type);

    return `class ${typeFirstUpperCase}SDK {
    constructor(network_service) {
        this._network_service = network_service;
    }

    get() {
        const url = [];
        const options = {};
    
        return this._network_service.makeAPIGetRequest(url, options)
    }

    add() {
        const url = [];
        const options = {};

        return this._network_service.makeAPIPostRequest(url, options)
    }

    edit() {
        const url = [];
        const options = {};
        
        return this._network_service.makeAPIPutRequest(url, options);
    }

    delete() {
        const url = [];
        const options = {};
        
        return this._network_service.makeAPIDeleteRequest(url, options);
    }

}

export default ${typeFirstUpperCase}SDK;
`
}

module.exports = {
    getDataForSDK
}