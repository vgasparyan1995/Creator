const Redux = require('./src/services/redux');
const Webpack = require('./src/services/webpack');
const AppServices = require('./src/services/appServices');
const AppManagers = require('./src/services/appManagers');
const Initializing = require('./src/services/initializing');
const Sdk = require('./src/services/sdk');
const Controller = require('./src/services/controllers');

let pathname = process.argv[3] || './';
let options = JSON.parse(process.argv[2]);

const app_name = options.app_name;
const redux = options.redux;

console.log(options)
Initializing.create(app_name, pathname);
Webpack.create(app_name, pathname);
Redux.create(pathname, redux);
AppServices.create(pathname);
AppManagers.create(pathname, redux);
Sdk.create(pathname, redux);
Controller.create(pathname, redux);
//
// if (application) {
//     const app_name = application.name || '';
//     createApplication(path, app_name);
// }
//
// if (webpack) {
//     const app_name = webpack.app_name || '';
//     createWebpack(path, app_name);
// }
//
// if (actions) {
//     createActions(path, actions);
// }