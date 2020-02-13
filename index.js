const fs = require('fs');

const {
    createActions,
    createWebpack,
    createApplication,
} = require('./creator');


let path = process.argv[3] || './';
let options = JSON.parse(process.argv[2]);

let actions = options.actions || [];
let webpack = options.webpack || false;
let application = options.application || false;

if (application) {
    const app_name = application.name || '';
    createApplication(path, app_name);
}

if (webpack) {
    const app_name = webpack.app_name || '';
    createWebpack(path, app_name);
}

if (actions) {
    createActions(path, actions);
}