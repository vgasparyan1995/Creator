const { lowerCaseFirst, upperCaseFirst } = require('./../helper');

function getDataForControllerManager(type) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import SelectorManager from './selectorManager.js';
import SdkManager from './sdkManager.js';
import ${typeFirstUpperCase}Controller from './../controllers/${typeFirstLowerCase}Controller';
//.import

const ${typeFirstLowerCase} = new ${typeFirstUpperCase}Controller(SelectorManager.${typeFirstLowerCase}Selector, SdkManager.${typeFirstLowerCase}SDK);
//.construct

export {
    ${typeFirstLowerCase},
    //.export
};

`
}

function getDataForSdkManager(type) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ServiceManager from './serviceManager';
import ${typeFirstUpperCase}SDK from './../api-sdk/${typeFirstLowerCase}SDK';
//.import

const ${typeFirstLowerCase}SDK = new ${typeFirstUpperCase}SDK(ServiceManager.networkService);
//.construct

export default {
    ${typeFirstLowerCase}SDK,
    //.export
}
`
}

function getDataForSelectorManager(type) {
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstLowerCase}Selector from './../store/selectors/${typeFirstLowerCase}Selector';
//.import

export default {
    ${typeFirstLowerCase}Selector,
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