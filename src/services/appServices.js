const {createFile, createFolder} = require('./../../helper');
const {getDataForNetworkService} = require('./../../data/dataForNetworkService');
const {getDataForCacheService} = require('./../../data/dataForCacheService');
const {getBaseException,getBadRequestException,getInternalException,getTokenExpiredException} = require('./../../data/dataForExceptions');
const {getDataForExceptionHandlerService} = require('./../../data/dataForExceptionHandlerSerivce');

class AppServices {
    static create(path) {
        const base_path = `${path}/src/core/services`;

        this._initial(base_path)
        this._createCacheService(base_path);
        this._createNetworkService(base_path);
        this._createExceptionHandler(base_path);
    }

    static _initial(path) {
        //Folders
        createFolder(path);
    }

    static _createNetworkService(path) {
        const path_network = `${path}/network`;
        const path_network_js = `${path_network}/networkService.js`;

        createFolder(path_network);
        createFile(path_network_js, getDataForNetworkService());
    }

    static _createCacheService(path) {
        const path_storage = `${path}/storage`;
        const path_cache_service_js = `${path_storage}/cacheService.js`;

        createFolder(path_storage);
        createFile(path_cache_service_js, getDataForCacheService());
    }

    static _createExceptionHandler(path) {
        //Folders
        const path_exception = `${path}/exception`;
        const path_types = `${path_exception}/types`;

        //Files
        const handler = `${path_exception}/exceptionHandlerService.js`;
        const base_exc = `${path_types}/baseException.js`;
        const internal = `${path_types}/internalException.js`;
        const bad_request = `${path_types}/badRequestException.js`;
        const token_expired = `${path_types}/tokenExpiredException.js`;

        const foldersPaths = [
            path_exception,
            path_types
        ];
        const filesInfo = [
            {path: handler, data: getDataForExceptionHandlerService()},
            {path: base_exc, data: getBaseException()},
            {path: internal, data: getInternalException()},
            {path: bad_request, data: getBadRequestException()},
            {path: token_expired, data: getTokenExpiredException()},
        ];

        foldersPaths.forEach(path => {
            createFolder(path);
        });
        filesInfo.forEach(file_info => {
            createFile(file_info.path, file_info.data);
        });
    }
}

module.exports = AppServices;