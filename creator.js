const fs = require('fs');
const {getDataForActionType, getDataForActionCreator} = require('./data/dataForActions');
const {getDataForActionsRegistration, getIndexActionsRegistration} = require('./data/dataForActionsRegistration');
const {getDataForReducer, getDataForCombineReducer} = require('./data/dataForReducer');
const {getDataForSelector} = require('./data/dataForSelector');
const {getDataForActionInvokingMiddleware} = require('./data/dataForActionInvokingMiddleware');
const {getDataForStore} = require('./data/dataForStore');

let type = process.argv[2];
let path = process.argv[3] || './';

// Create Action
if (!fs.existsSync(`${path}actions`)) {
    fs.mkdirSync(`${path}actions`);
}
fs.mkdirSync(`${path}actions/${type}`);
fs.writeFileSync(`${path}actions/${type}/${type}ActionCreator.js`, getDataForActionCreator(type));
fs.writeFileSync(`${path}actions/${type}/${type}ActionType.js`, getDataForActionType(type));







// Create Action Registration
if (!fs.existsSync(`${path}actionsRegistration`)) {
    fs.mkdirSync(`${path}actionsRegistration`);
}
fs.writeFileSync(`${path}actionsRegistration/${type}Registration.js`, getDataForActionsRegistration(type));
if (!fs.existsSync(`${path}actionsRegistration/index.js`)) {
    fs.writeFileSync(`${path}actionsRegistration/index.js`, getIndexActionsRegistration(type));
} else {
    let contents = fs.readFileSync(`${path}actionsRegistration/index.js`, 'utf8');
    contents = contents.replace('//.import', `import ${type}Registration from './${type}Registration';\n//.import`);
    contents = contents.replace('//.construct', `${type}Registration(configs);\n//.construct`);

    fs.writeFileSync(`${path}actionsRegistration/index.js`, contents);
}




// Create Action Invoking Middleware
if (!fs.existsSync(`${path}middleware`)) {
    fs.mkdirSync(`${path}middleware`);
}
fs.writeFileSync(`${path}middleware/actionInvokingMiddleware.js`, getDataForActionInvokingMiddleware());







// Create Reducer
if (!fs.existsSync(`${path}reducers`)) {
    fs.mkdirSync(`${path}reducers`);
}
if (!fs.existsSync(`${path}reducers/combineReducer.js`)) {
    fs.writeFileSync(`${path}reducers/combineReducer.js`, getDataForCombineReducer(type));
} else {
    let contents = fs.readFileSync(`${path}reducers/combineReducer.js`, 'utf8');
    contents = contents.replace('//.import', `import ${type}Reducer from './${type}Reducer';\n//.import`);
    contents = contents.replace('//.construct', `${type}Reducer,\n//.construct`);

    fs.writeFileSync(`${path}reducers/combineReducer.js`, contents);
}
fs.writeFileSync(`${path}reducers/${type}Reducer.js`, getDataForReducer(type));





// Create Selector
if (!fs.existsSync(`${path}selectors`)) {
    fs.mkdirSync(`${path}selectors`);
}
fs.writeFileSync(`${path}selectors/${type}Selector.js`, getDataForSelector(type));



// Create Store
if (!fs.existsSync(`${path}store.js`)) {
    fs.writeFileSync(`${path}store.js`, getDataForStore());
}