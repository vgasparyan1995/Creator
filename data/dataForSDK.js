function getDataForSDK(type) {
    return `class ${type}SDK {
    constructor(network_service, app_constants) {
        this._network_service = network_service;
        this._app_constants = app_constants;
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

export default ${type}SDK;
`
}

module.exports = {
    getDataForSDK
}