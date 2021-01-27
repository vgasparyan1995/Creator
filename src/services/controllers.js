const {createFile, createFolder, lowerCaseFirst} = require('./../../helper');
const {getDataForController} = require('./../../data/dataForController');

class Controller {

    static create(path, sdk_items) {
        const base_path = `${path}/src/core/controllers`;
        createFolder(base_path);

        sdk_items.forEach(name => {
            const file_path = `${base_path}/${lowerCaseFirst(name)}Controller.js`;
            createFile(file_path, getDataForController(name));
        })
    }
}

module.exports = Controller;