const { lowerCaseFirst, upperCaseFirst } = require('./../helper');

function getDataForControllerManager() {
    return `import SelectorManager from './selectorManager.js';
import SdkManager from './sdkManager.js';
//.import

//.construct

export {
    //.export
};

`
}

function getDataForSdkManager() {
    return `import ServiceManager from './serviceManager';
//.import

//.construct

export default {
    //.export
}
`
}

function getDataForSelectorManager() {
    return `//.import

export default {
    //.export
}
`
}

function getDataForServiceManager() {
    return `import cacheService from './../services/storage/cacheService';
import NetworkService from './../services/network/networkService';
import ExceptionHandlerService from './../services/exception/exceptionHandlerService';

import InternalException from './../services/exception/types/internalException';
import BadRequestException from './../services/exception/types/badRequestException';
import TokenExpiredException from './../services/exception/types/tokenExpiredException';

const internalException = new InternalException();
const badRequestException = new BadRequestException();
const tokenExpiredException = new TokenExpiredException();

const exceptions = [internalException, badRequestException, tokenExpiredException];

const exceptionHandlerService = new ExceptionHandlerService(exceptions);
const networkService = new NetworkService(exceptionHandlerService, cacheService);

export default {
    cacheService,
    networkService,
    exceptionHandlerService,
}
`
}

module.exports = {
    getDataForControllerManager,
    getDataForSdkManager,
    getDataForSelectorManager,
    getDataForServiceManager
}