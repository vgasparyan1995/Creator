const {createFile, createFolder, lowerCaseFirst} = require('./../../helper');
const {getDataForSDK} = require('./../../data/dataForSDK');

class Sdk {

    static create(path, sdk_items) {
        const base_path = `${path}/src/core/api-sdk`;
        createFolder(base_path);

        sdk_items.forEach(name => {
            const file_path = `${base_path}/${lowerCaseFirst(name)}SDK.js`;
            createFile(file_path, getDataForSDK(name));
        })
    }
}

module.exports = Sdk;