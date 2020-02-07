const fs = require('fs');
const { upperCaseFisrt, lowerCaseFirst } = require('./helper');
const { getDataForActionType, getDataForActionCreator } = require('./data/dataForActions');
const { getDataForActionsRegistration, getIndexActionsRegistration } = require('./data/dataForActionsRegistration');
const { getDataForReducer, getDataForCombineReducer } = require('./data/dataForReducer');
const { getDataForSelector } = require('./data/dataForSelector');
const { getDataForActionInvokingMiddleware } = require('./data/dataForActionInvokingMiddleware');
const { getDataForStore } = require('./data/dataForStore');
const { getDataForController } = require('./data/dataForController');
const { getDataForSDK } = require('./data/dataForSDK.js');
const { getDataForControllerManager, getDataForSdkManager } = require('./data/dataForManagers');

let path = process.argv[3] || './';

let options = JSON.parse(process.argv[2]);
let actions = options.actions || [];

if (!fs.existsSync(`${path}src`)) {
    fs.mkdirSync(`${path}src`)
}

if (!fs.existsSync(`${path}src/core`)) {
    fs.mkdirSync(`${path}src/core`)
}

if (!fs.existsSync(`${path}src/core/store`)) {
    fs.mkdirSync(`${path}src/core/store`)
}



// Create Action
if (!fs.existsSync(`${path}src/core/store/actions`)) {
    fs.mkdirSync(`${path}src/core/store/actions`);
}
for (let index in actions) {
    fs.mkdirSync(`${path}src/core/store/actions/${lowerCaseFirst(actions[index])}`);
    fs.writeFileSync(`${path}src/core/store/actions/${lowerCaseFirst(actions[index])}/${lowerCaseFirst(actions[index])}ActionCreator.js`, getDataForActionCreator(actions[index]));
    fs.writeFileSync(`${path}src/core/store/actions/${lowerCaseFirst(actions[index])}/${lowerCaseFirst(actions[index])}ActionType.js`, getDataForActionType(actions[index]));
}







// Create Action Registration
if (!fs.existsSync(`${path}src/core/store/actionsRegistration`)) {
    fs.mkdirSync(`${path}src/core/store/actionsRegistration`);
}

for (let index in actions) {
    fs.writeFileSync(`${path}src/core/store/actionsRegistration/${lowerCaseFirst(actions[index])}Registration.js`, getDataForActionsRegistration(actions[index]));
    if (!fs.existsSync(`${path}src/core/store/actionsRegistration/index.js`)) {
        fs.writeFileSync(`${path}src/core/store/actionsRegistration/index.js`, getIndexActionsRegistration(actions[index]));
    } else {
        let contents = fs.readFileSync(`${path}src/core/store/actionsRegistration/index.js`, 'utf8');
        contents = contents.replace('//.import', `import ${lowerCaseFirst(actions[index])}Registration from './${lowerCaseFirst(actions[index])}Registration';\n//.import`);
        contents = contents.replace('//.construct', `${lowerCaseFirst(actions[index])}Registration(configs);\n//.construct`);

        fs.writeFileSync(`${path}src/core/store/actionsRegistration/index.js`, contents);
    }
}



// Create Action Invoking Middleware
if (!fs.existsSync(`${path}src/core/store/middleware`)) {
    fs.mkdirSync(`${path}src/core/store/middleware`);
    fs.writeFileSync(`${path}src/core/store/middleware/actionInvokingMiddleware.js`, getDataForActionInvokingMiddleware());
}




// Create Reducer
if (!fs.existsSync(`${path}src/core/store/reducers`)) {
    fs.mkdirSync(`${path}src/core/store/reducers`);
}

for (let index in actions) {
    if (!fs.existsSync(`${path}src/core/store/reducers/combineReducer.js`)) {
        fs.writeFileSync(`${path}src/core/store/reducers/combineReducer.js`, getDataForCombineReducer(actions[index]));
    } else {
        let contents = fs.readFileSync(`${path}src/core/store/reducers/combineReducer.js`, 'utf8');
        contents = contents.replace('//.import', `import ${lowerCaseFirst(actions[index])}Reducer from './${lowerCaseFirst(actions[index])}Reducer';\n//.import`);
        contents = contents.replace('//.construct', `${lowerCaseFirst(actions[index])}Reducer,\n//.construct`);

        fs.writeFileSync(`${path}src/core/store/reducers/combineReducer.js`, contents);
    }
    fs.writeFileSync(`${path}src/core/store/reducers/${lowerCaseFirst(actions[index])}Reducer.js`, getDataForReducer(actions[index]));
}



// Create Selector

for (let index in actions) {
    if (!fs.existsSync(`${path}src/core/store/selectors`)) {
        fs.mkdirSync(`${path}src/core/store/selectors`);
    }
    fs.writeFileSync(`${path}src/core/store/selectors/${lowerCaseFirst(actions[index])}Selector.js`, getDataForSelector(actions[index]));
}


// Create Store
if (!fs.existsSync(`${path}src/core/store/store.js`)) {
    fs.writeFileSync(`${path}src/core/store/store.js`, getDataForStore());
}

// TODO: Stexic sharunakeli

// Create Controllers
if (!fs.existsSync(`${path}src/core/controllers`)) {
    fs.mkdirSync(`${path}src/core/controllers`)
}
for (let index in actions) {
    fs.writeFileSync(`${path}src/core/controllers/${actions[index]}Controller.js`, getDataForController(actions[index]));
}

// Create SDK
if (!fs.existsSync(`${path}src/core/api-sdk`)) {
    fs.mkdirSync(`${path}src/core/api-sdk`)
}
for (let index in actions) {
    fs.writeFileSync(`${path}src/core/api-sdk/${actions[index]}SDK.js`, getDataForSDK(actions[index]));
}

// Create Managers
if (!fs.existsSync(`${path}src/core/managers`)) {
    fs.mkdirSync(`${path}src/core/managers`)
}

// Controller manager
for (let index in actions) {
    if (!fs.existsSync(`${path}src/core/managers/controllerManager.js`)) {
        fs.writeFileSync(`${path}src/core/managers/controllerManager.js`, getDataForControllerManager(actions[index]));
    } else {
        let contents = fs.readFileSync(`${path}src/core/managers/controllerManager.js`, 'utf8');
        contents = contents.replace('//.import', `import ${actions[index]} from './${actions[index]}Controller';\n//.import`);
        contents = contents.replace('//.construct', `const ${actions[index]} = new ${actions[index]}(ServiceManager.selector, ServiceManager.sdk);\n//.construct`);
        contents = contents.replace('//.export', `${actions[index]},\n//.export`);
        fs.writeFileSync(`${path}src/core/managers/controllerManager.js`, contents);
    }
}

//SDK manager
for (let index in actions) {
    if (!fs.existsSync(`${path}src/core/managers/sdkManager.js`)) {
        fs.writeFileSync(`${path}src/core/managers/sdkManager.js`, getDataForSdkManager(actions[index]));
    } else {
        let contents = fs.readFileSync(`${path}src/core/managers/sdkManager.js`, 'utf8');
        contents = contents.replace('//.import', `import ${actions[index]} from './../api-sdk/${actions[index]}SDK';\n//.import`);
        contents = contents.replace('//.construct', `const ${actions[index]}SDK = new ${actions[index]}SDK(ServiceManager.networkService, ServiceManager.appConstants);\n//.construct`);
        contents = contents.replace('//.export', `${actions[index]}SDK,\n//.export`);
        fs.writeFileSync(`${path}src/core/managers/sdkManager.js`, contents);
    }
}
