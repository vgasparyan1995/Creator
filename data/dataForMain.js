function getDataForIndex() {
    return `import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from './core/history/index.js';
import store from './core/store/store.js';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div/>
        </Router>
    </Provider>,
    document.getElementById('root')
);   
`
}

function getDataForScss() {
    return `@import "assets/sass/settings";`
}

function getDateForSassSettings() {
    return `$version-control: '?v=#{random(777)}';
$transition-duration: 0.24s;

$sub-header-height: 60px;

$header-bg: #3d3d5f;
$content-bg: #f9fbfc;

$accent-color-1: #1473e6;
$accent-color-2: #2bc784;
$accent-color-3: #e6af57;
$accent-color-4: #2A6BE6;

$common-txt-color-1: #3C4043;
$common-txt-color-2: #5d5d5d;
$common-txt-color-3: #ffffff;

$common-white-bg: #ffffff;
$common-black-bg: #000000;
$skeleton-content-bg: #f7f7f7;

$error-color: #e64e48;
$success-color: #5acc3f;
$info-color: #1473e6;
`
}

function getDataForPackage(appliactionName) {
    appliactionName = appliactionName || '';
    return `{
    "name": "${appliactionName.toLowerCase()}",
    "version": "0.1.1",
    "private": true,
    "scripts": {
        "start-test": "cross-env NODE_ENV='test' webpack-dev-server --inline --colors --progress --hot",
        "start-staging": "cross-env NODE_ENV='staging' webpack-dev-server --inline --colors --progress --hot",
        "start-production": "cross-env NODE_ENV='production' webpack-dev-server --inline --colors --progress --hot",
        "start-development": "cross-env NODE_ENV='development' webpack-dev-server --inline --colors --progress --hot",
        "build-test": "cross-env NODE_ENV='test' webpack --progress",
        "build-staging": "cross-env NODE_ENV='staging' webpack --progress",
        "build-production": "cross-env NODE_ENV='production' webpack --progress",
        "build-development": "cross-env NODE_ENV='development' webpack --progress",
        "deploy-staging": "gulp deploy-staging",
        "deploy-production": "gulp deploy-production",
        "deploy-development": "gulp deploy-development",
        "start-local-server": "node server/index.js"
    },
    "dependencies": {
        "body-parser": "^1.19.0",
        "cookie-parser": "~1.4.3",
        "cors": "^2.8.5",
        "express": "^4.17.1",
        "history": "^4.9.0",
        "memoize-one": "^5.0.4",
        "mime-types": "^2.1.24",
        "moment": "^2.19.2",
        "morgan": "^1.9.1",
        "ncp": "^2.0.0",
        "node-cache": "^4.2.1",
        "node-sass": "^4.12.0",
        "prop-types": "^15.7.2",
        "rc-tooltip": "^3.7.3",
        "react": "^16.8.6",
        "react-addons-shallow-compare": "^15.6.2",
        "react-datepicker": "^1.6.0",
        "react-dates": "^15.1.0",
        "react-detect-offline": "^2.1.2",
        "react-device-detect": "^1.6.2",
        "react-dom": "^16.8.6",
        "react-draggable": "^3.0.3",
        "react-redux": "^7.0.3",
        "react-router-dom": "^5.0.0",
        "react-simple-keyboard": "^1.3.6",
        "react-sound": "^0.8.0",
        "react-swipeable-views": "^0.12.14",
        "react-transition-group": "^1.2.1",
        "redux": "^4.0.1",
        "redux-devtools-extension": "^2.13.8",
        "request": "^2.85.0"
    },
    "devDependencies": {
        "eslint-config-airbnb": "16.1.0",
        "eslint-plugin-babel": "^5.1.0",
        "eslint-plugin-compat": "^3.1.2",
        "eslint-plugin-flowtype": "^2.46.1",
        "babel-core": "^6.26.0",
        "babel-eslint": "^8.0.1",
        "babel-loader": "^7.1.2",
        "babel-plugin-react-transform": "^3.0.0",
        "babel-polyfill": "^6.26.0",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "babel-preset-stage-1": "^6.24.1",
        "babel-preset-stage-2": "^6.24.1",
        "babel-preset-stage-3": "^6.24.1",
        "babel-register": "^6.26.0",
        "clean-webpack-plugin": "^0.1.17",
        "cross-env": "^5.0.5",
        "css-loader": "^3.2.0",
        "escape-string-regexp": "^1.0.5",
        "eslint": "^4.8.0",
        "eslint-import-resolver-alias": "^1.1.2",
        "eslint-plugin-import": "^2.16.0",
        "eslint-plugin-promise": "^3.5.0",
        "eslint-plugin-react": "^7.4.0",
        "eslint-plugin-standard": "^3.0.1",
        "expect": "^25.0.0",
        "file-loader": "^1.1.4",
        "html-webpack-plugin": "^3.2.0",
        "node-sass": "^4.5.3",
        "react-swipeable": "^4.1.0",
        "react-transform-hmr": "^1.0.4",
        "recursive-readdir": "^2.2.1",
        "sass-loader": "^6.0.6",
        "style-loader": "^0.19.0",
        "url-loader": "^0.6.2",
        "vinyl-ftp": "^0.6.1",
        "webpack": "^4.40.1",
        "webpack-cli": "^3.3.8",
        "webpack-dev-server": "3.8.0",
        "webpack-hot-middleware": "2.20.0"
    }
}
`
}

module.exports = {
    getDataForIndex,
    getDataForScss,
    getDateForSassSettings,
    getDataForPackage
}