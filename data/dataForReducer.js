function getDataForReducer(type) {
    return `import ${type}ActionType from "../actions/${type}/${type}ActionType";

    const initialState = {
        ${type.toLowerCase()}s: null,
        get${type}sLoading: false,
        add${type}Loading: false,
        edit${type}Loading: false,
        delete${type}Loading: false,
    };
    
    const ${type}Reducer = (state = initialState, action) => {
        switch (action.type) {
            case ${type}ActionType.SAVE_${type.toUpperCase()}S:
                return {
                    ...state,
                    ${type.toLowerCase()}s: action.payload.data
                };
            case ${type}ActionType.GET_${type.toUpperCase()}S_LOADING:
                return {
                    ...state,
                    get${type}sLoading: action.payload.loading
                };
            case ${type}ActionType.ADD_${type.toUpperCase()}_LOADING:
                return {
                    ...state,
                    add${type}Loading: action.payload.loading
                };
            case ${type}ActionType.EDIT_${type.toUpperCase()}_LOADING:
                return {
                    ...state,
                    edit${type}Loading: action.payload.loading
                };
            case ${type}ActionType.DELETE_${type.toUpperCase()}_LOADING:
                return {
                    ...state,
                    delete${type}Loading: action.payload.loading
                };
            case ${type}ActionType.RESET_${type.toUpperCase()}S:
                return initialState;
            default:
                return state;
        }
    };  
export default ${type}Reducer;
`
}

function getDataForCombineReducer(type) {
    return `import {combineReducers} from 'redux';

import ${type}Reducer from './${type}Reducer';
//tmp import
    
const AppReducer = combineReducers({
    ${type}Reducer,
    //tmp reducer
});
    
const RootReducer = (state, action) => {
    return AppReducer(state, action);
};
    
export default RootReducer;
`
}

module.exports = {
    getDataForReducer,
    getDataForCombineReducer
};