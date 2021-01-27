const {readFile, writeFile, createFile, createFolder, lowerCaseFirst, upperCaseFirst} = require('./../../helper');
const {getDataForControllerManager, getDataForSdkManager, getDataForSelectorManager, getDataForServiceManager} = require('./../../data/dataForManagers');

class AppManagers {

    static create(path, redux_items) {
        redux_items = redux_items || [];
        const base_path = `${path}/src/core/managers`;
        this._initial(base_path);
        this._createServiceManager(base_path);
        this._createSdkManager(base_path, redux_items);
        this._createSelectorManager(base_path, redux_items);
        this._createControllerManager(base_path, redux_items);
    }

    static _initial(path) {
        createFolder(path);
    }

    static _createControllerManager(basePath, items) {
        const path = `${basePath}/controllerManager.js`;
        createFile(path, getDataForControllerManager());

        items.forEach(name => {
            let contents = readFile(path);
            if (contents.includes(`${upperCaseFirst(name)}Controller`)) return;
            contents = contents.replace('//.import', `import ${upperCaseFirst(name)}Controller from './../controllers/${lowerCaseFirst(name)}Controller';\n//.import`);
            contents = contents.replace('//.construct', `const ${lowerCaseFirst(name)} = new ${upperCaseFirst(name)}Controller(SelectorManager.${lowerCaseFirst(name)}Selector, SdkManager.${lowerCaseFirst(name)}SDK);\n//.construct`);
            contents = contents.replace('//.export', `\t${lowerCaseFirst(name)},\n\t//.export`);
            writeFile(path, contents);
        });
    }

    static _createSdkManager(basePath, items) {
        const path = `${basePath}/sdkManager.js`;
        createFile(path, getDataForSdkManager());

        items.forEach(name => {
            let contents = readFile(path);
            if (contents.includes(`${upperCaseFirst(name)}SDK`)) return;
            contents = contents.replace('//.import', `import ${upperCaseFirst(name)}SDK from './../api-sdk/${lowerCaseFirst(name)}SDK';\n//.import`);
            contents = contents.replace('//.construct', `const ${lowerCaseFirst(name)}SDK = new ${upperCaseFirst(name)}SDK(ServiceManager.networkService);\n//.construct`);
            contents = contents.replace('//.export', `${lowerCaseFirst(name)}SDK,\n//.export`);
            writeFile(path, contents);
        });
    }

    static _createSelectorManager(basePath, items) {
        const path = `${basePath}/selectorManager.js`;
        createFile(path, getDataForSelectorManager());

        items.forEach(name => {
            let contents = readFile(path);
            if (contents.includes(`${lowerCaseFirst(name)}Selector`)) return;
            contents = contents.replace('//.import', `import ${lowerCaseFirst(name)}Selector from './../store/selectors/${lowerCaseFirst(name)}Selector';\n//.import`);
            contents = contents.replace('//.export', `${lowerCaseFirst(name)}Selector,\n//.export`);
            writeFile(path, contents);
        });
    }

    static _createServiceManager(basePath) {
        const path = `${basePath}/serviceManager.js`;
        createFile(path, getDataForServiceManager());
    }
}

module.exports = AppManagers;