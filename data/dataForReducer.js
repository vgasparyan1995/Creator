const {lowerCaseFirst, upperCaseFirst} = require('./../helper');

function getDataForReducer(type) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstUpperCase}ActionType from "../actions/${typeFirstLowerCase}/${typeFirstLowerCase}ActionType";

    const initialState = {
        ${typeFirstLowerCase}s: null,
        get${typeFirstUpperCase}sLoading: false,
        add${typeFirstUpperCase}Loading: false,
        edit${typeFirstUpperCase}Loading: false,
        delete${typeFirstUpperCase}Loading: false,
    };
    
    const ${typeFirstLowerCase}Reducer = (state = initialState, action) => {
        switch (action.type) {
            case ${typeFirstUpperCase}ActionType.SAVE_${type.toUpperCase()}S:
                return {
                    ...state,
                    ${typeFirstLowerCase}s: action.payload.data
                };
            case ${typeFirstUpperCase}ActionType.GET_${type.toUpperCase()}S_LOADING:
                return {
                    ...state,
                    get${typeFirstUpperCase}sLoading: action.payload.loading
                };
            case ${typeFirstUpperCase}ActionType.ADD_${type.toUpperCase()}_LOADING:
                return {
                    ...state,
                    add${typeFirstUpperCase}Loading: action.payload.loading
                };
            case ${typeFirstUpperCase}ActionType.EDIT_${type.toUpperCase()}_LOADING:
                return {
                    ...state,
                    edit${typeFirstUpperCase}Loading: action.payload.loading
                };
            case ${typeFirstUpperCase}ActionType.DELETE_${type.toUpperCase()}_LOADING:
                return {
                    ...state,
                    delete${typeFirstUpperCase}Loading: action.payload.loading
                };
            case ${typeFirstUpperCase}ActionType.RESET_${type.toUpperCase()}S:
                return initialState;
            //.case
            default:
                return state;
        }
    };  
export default ${typeFirstLowerCase}Reducer;
`
}

function getDataForReducerDefault(type, property, action_type, loading) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstUpperCase}ActionType from "../actions/${typeFirstLowerCase}/${typeFirstLowerCase}ActionType";

    const initialState = {
        ${property}: null,
        ${loading ? `${property}Loading: false,`: ''}
    };
    
    const ${typeFirstLowerCase}Reducer = (state = initialState, action) => {
        switch (action.type) {
            case ${typeFirstUpperCase}ActionType.${action_type}:
                return {
                    ...state,
                    ${property}: action.payload.data
                };
            ${
                loading ? 
                `case ${typeFirstUpperCase}ActionType.${action_type}_LOADING:
                return {
                    ...state,
                    ${property}Loading: action.payload.loading
                };` : ''
            }    
            //.case
            default:
                return state;
        }
    };  
export default ${typeFirstLowerCase}Reducer;
`
}

function getCustomCase(type, property, action_type, loading) {
    const typeFirstUpperCase = upperCaseFirst(type);

    return `case ${typeFirstUpperCase}ActionType.${action_type}:
return {
    ...state,
    ${property}: action.payload.data
};
${
    loading ? 
    `case ${typeFirstUpperCase}ActionType.${action_type}_LOADING:
return {
    ...state,
    ${property}Loading: action.payload.loading
};
//.case
` : ''
}  `
}


function getDataForCombineReducer() {

    return `import {combineReducers} from 'redux';

//.import
    
const AppReducer = combineReducers({
    //.construct
});
    
const RootReducer = (state, action) => {
    return AppReducer(state, action);
};
    
export default RootReducer;
`
}

module.exports = {
    getDataForReducer,
    getDataForCombineReducer,
    getDataForReducerDefault,
    getCustomCase,
};