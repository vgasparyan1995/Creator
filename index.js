const fs = require('fs');

const {
    createActions,
    createWebpack,
    createApplication,
} = require('./creator');
const Initializing = require('./src/services/initializing');
const Webpack = require('./src/services/webpack');
const Redux =require('./src/services/redux');


let pathname = process.argv[3] || './';
let options = JSON.parse(process.argv[2]);

const app_name = options.app_name;
const redux = options.redux;

// let actions = options.actions || [];
// let webpack = options.webpack || false;
// let application = options.application || false;

Initializing.create(app_name, pathname);
Webpack.create(app_name, pathname);
Redux.create(redux, pathname);
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