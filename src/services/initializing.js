const {createFile, createFolder} = require('./../../helper');
const {getDataForHistory} = require('./../../data/dataForHistory');
const {getDataForPackage, getDataForIndex, getDataForScss, getDataForSassSettings} = require('./../../data/dataForMain');

class Initializing {
    static create(app_name, path) {
        // Folders
        const base_path = path;
        const path_src = `${path}/src`;
        const path_src_core = `${path}/src/core`;
        const path_src_assets = `${path}/src/assets`;
        const path_src_assets_sass = `${path}/src/assets/sass`;
        const path_src_core_history = `${path}/src/core/history`;

        //Files
        const path_src_index = `${path}/src/index.js`;
        const path_src_index_scss = `${path}/src/index.scss`;
        const path_package_json = `${path}/package.json`;
        const path_src_core_history_index = `${path}/src/core/history/index.js`;
        const path_src_assets_sass_settings = `${path}/src/assets/sass/_settings.scss`;

        const foldersPaths = [
            base_path,
            path_src,
            path_src_core,
            path_src_assets,
            path_src_assets_sass,
            path_src_core_history,
        ];
        //TODO: index data two type (redux store)
        const filesInfo = [
            {path: path_src_index, data: getDataForIndex()},
            {path: path_src_index_scss, data: getDataForScss()},
            {path: path_package_json, data: getDataForPackage(app_name)},
            {path: path_src_assets_sass_settings, data: getDataForSassSettings()},
            {path: path_src_core_history_index, data: getDataForHistory()},
        ];

        foldersPaths.forEach(path => {
            createFolder(path);
        });
        filesInfo.forEach(file_info => {
            createFile(file_info.path, file_info.data);
        });
    }
}

module.exports = Initializing;