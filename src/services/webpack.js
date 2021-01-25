const {createFile} = require('./../../helper');
const {getDataForApiHosts, getDataForWebpackConfig, getDataForWebpackConstants, getEjsFile} = require('./../../data/dataForWebpack');

class Webpack {
    static create(app_name, pathname) {
        const path = pathname;
        const path_index_ejs = `${path}/index.ejs`;
        const path_api_host = `${path}/api-hosts.json`;
        const path_webpack_config = `${path}/webpack.config.js`;
        const path_webpack_constants = `${path}/webpack.constants.json`;

        const filesInfo = [
            {path: path_index_ejs, data: getEjsFile()},
            {path: path_api_host, data: getDataForApiHosts()},
            {path: path_webpack_config, data: getDataForWebpackConfig()},
            {path: path_webpack_constants, data: getDataForWebpackConstants(app_name)},
        ];

        filesInfo.forEach(file_info => {
            createFile(file_info.path, file_info.data);
        });
    }
}

module.exports = Webpack;