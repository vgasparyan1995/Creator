const { lowerCaseFirst, upperCaseFisrt } = require('./../helper');

function getDataForControllerManager(type) {
    const typeFirstUpperCase = upperCaseFisrt(type);
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
    const typeFirstUpperCase = upperCaseFisrt(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ServiceManager from './serviceManager';
import ${typeFirstUpperCase}SDK from './../api-sdk/${typeFirstLowerCase}SDK';
//.import

const ${typeFirstLowerCase}SDK = new ${typeFirstUpperCase}SDK(ServiceManager.networkService, ServiceManager.appConstants);
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

module.exports = {
    getDataForControllerManager,
    getDataForSdkManager,
    getDataForSelectorManager,
}