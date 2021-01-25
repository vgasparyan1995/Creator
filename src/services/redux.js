const {readFile, writeFile, createFile, createFolder, lowerCaseFirst} = require('./../../helper');
const {getDataForStore} = require('./../../data/dataForStore');
const {getDataForSelector} = require('./../../data/dataForSelector');
const {getDataForActionInvokingMiddleware} = require('./../../data/dataForActionInvokingMiddleware');
const {getDataForReducer, getDataForCombineReducer} = require('./../../data/dataForReducer');
const {getDataForActionCreator, getDataForActionType} = require('./../../data/dataForActions');
const {getIndexActionsRegistration, getDataForActionsRegistration} = require('./../../data/dataForActionsRegistration');

class Redux {

    static create(redux_items, path) {
        this._initial(path);
        this._createStore(path);
        this._createActionInvokingMiddleware(path);
        this._createActions(redux_items, path);
        this._createReducers(redux_items, path);
        this._createSelector(redux_items, path);
        this._createActionsRegistration(redux_items, path);
    }

    static _initial(path) {
        //Folders
        const base_path = path;
        const path_src = `${path}/src`;
        const path_src_core = `${path}/src/core`;
        const path_src_core_store = `${path}/src/core/store`;
        const path_src_core_store_middleware = `${path}/src/core/store/middleware`;
        const path_src_core_store_actions = `${path}/src/core/store/actions`;
        const path_src_core_store_reducers = `${path}/src/core/store/reducers`;
        const path_src_core_store_selectors = `${path}/src/core/store/selectors`;
        const path_src_core_store_actions_registration = `${path}/src/core/store/actionsRegistration`;

        const foldersPaths = [
            base_path,
            path_src,
            path_src_core,
            path_src_core_store,
            path_src_core_store_middleware,
            path_src_core_store_actions,
            path_src_core_store_reducers,
            path_src_core_store_selectors,
            path_src_core_store_actions_registration,
        ];

        foldersPaths.forEach(path => {
            createFolder(path);
        });

    }

    static _createStore(path) {
        const path_store = `${path}/src/core/store/store.js`;
        createFile(path_store, getDataForStore());
    }

    static _createActionInvokingMiddleware(path) {
        const path_middleware = `${path}/src/core/store/middleware/actionInvokingMiddleware.js`;
        createFile(path_middleware, getDataForActionInvokingMiddleware());
    }

    static _createDefaultActions(actions, path) {
        actions.forEach(name => {
            // Folders
            const path_action = `${path}/src/core/store/actions/${lowerCaseFirst(name)}`;
            //Files
            const path_action_type = `${path_action}/${lowerCaseFirst(name)}ActionType.js`;
            const path_action_creator = `${path_action}/${lowerCaseFirst(name)}ActionCreator.js`;

            const filesInfo = [
                {path: path_action_type, data: getDataForActionType(name)},
                {path: path_action_creator, data: getDataForActionCreator(name)}
            ];

            createFolder(path_action);
            filesInfo.forEach(file_info => {
                createFile(file_info.path, file_info.data);
            });
        });
    }

    static _createDefaultReducers(reducers, path) {
        reducers.forEach(name => {
            const path_reducer = `${path}/src/core/store/reducers/${lowerCaseFirst(name)}Reducer.js`;
            createFile(path_reducer, getDataForReducer(name));
        });
    }

    static _createCombineReducer(reducers, path) {
        const combine_path = `${path}/src/core/store/reducers/combineReducers.js`
        createFile(combine_path, getDataForCombineReducer());
        reducers.forEach(name => {
            let contents = readFile(combine_path);
            if (contents.includes(`${lowerCaseFirst(name)}Reducer`)) return;
            contents = contents.replace('//.import', `import ${lowerCaseFirst(name)}Reducer from './${lowerCaseFirst(name)}Reducer';\n//.import`);
            contents = contents.replace('//.construct', `${lowerCaseFirst(name)}Reducer,\n//.construct`);
            writeFile(combine_path, contents);
        });
    }

    static _createActions(actions, path) {
        this._createDefaultActions(actions, path);
        // TODO: custom action
    }

    static _createReducers(reducers, path) {
        this._createDefaultReducers(reducers, path);
        this._createCombineReducer(reducers, path);
    }

    static _createSelector(selectors, path) {
        selectors.forEach(name => {
           const selector_path =  `${path}/src/core/store/selectors/${lowerCaseFirst(name)}Selector.js`;
           createFile(selector_path, getDataForSelector(name));
        });
    }

    static _createActionsRegistration(actions, path) {
        const action_reg_index = `${path}/src/core/store/actionsRegistration/index.js`
        createFile(action_reg_index, getIndexActionsRegistration());

        actions.forEach(name => {
            const action_path = `${path}/src/core/store/actionsRegistration/${lowerCaseFirst(name)}Registration.js`;
            writeFile(action_path, getDataForActionsRegistration(name));

            let contents = readFile(action_reg_index);
            contents = contents.replace('//.import', `import ${lowerCaseFirst(name)}Registration from './${lowerCaseFirst(name)}Registration';\n//.import`);
            contents = contents.replace('//.construct', `${lowerCaseFirst(name)}Registration(configs);\n//.construct`);
            writeFile(action_reg_index, contents);
        });
    }
}

module.exports = Redux;