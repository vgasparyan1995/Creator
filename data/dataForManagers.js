function getDataForControllerManager(type) {
    return `import ServiceManager from './ServiceManager.js';
import ${type} from '../controllers/${type}Controller.js';
//.import

const ${type} = new ${type}(ServiceManager.selector, ServiceManager.sdk);
//.construct

export {
    ${type},
    //.export
};

`
}

function getDataForSdkManager(type) {
    return `import ServiceManager from './serviceManager';
import ${type}SDK from './../api-sdk/${type}SDK';
//.import

const ${type}SDK = new ${type}SDK(ServiceManager.networkService, ServiceManager.appConstants);
//.construct

export default {
    ${type}SDK,
    //.export
}
`
}

module.exports = {
    getDataForControllerManager,
    getDataForSdkManager,
}