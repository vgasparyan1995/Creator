const { lowerCaseFirst, upperCaseFirst } = require('./../helper');

function getDataForActionCreator(type) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstUpperCase}ActionType from "./${typeFirstLowerCase}ActionType";

export const get${typeFirstUpperCase}s = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.GET_${type.toUpperCase()}S,
    payload
});

export const get${typeFirstUpperCase}sLoading = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.GET_${type.toUpperCase()}S_LOADING,
    payload
});

export const add${typeFirstUpperCase} = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.ADD_${type.toUpperCase()},
    payload
});

export const add${typeFirstUpperCase}Loading = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.ADD_${type.toUpperCase()}_LOADING,
    payload
});

export const edit${typeFirstUpperCase} = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.EDIT_${type.toUpperCase()},
    payload
});

export const edit${typeFirstUpperCase}Loading = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.EDIT_${type.toUpperCase()}_LOADING,
    payload
});

export const delete${typeFirstUpperCase} = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.DELETE_${type.toUpperCase()},
    payload
});

export const delete${typeFirstUpperCase}Loading = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.DELETE_${type.toUpperCase()}_LOADING,
    payload
});

export const save${typeFirstUpperCase}s = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.SAVE_${type.toUpperCase()}S,
    payload
});

export const reset${typeFirstUpperCase}s = (payload) => ({
    type: ${typeFirstUpperCase}ActionType.RESET_${type.toUpperCase()}S,
    payload
});

//.function
`;
}

function getDataForActionType(type) {
    const typeFirstUpperCase = upperCaseFirst(type);

    return `const ${typeFirstUpperCase}ActionType = {
    GET_${type.toUpperCase()}S: "get_${type.toLowerCase()}s",
    GET_${type.toUpperCase()}S_LOADING: "get_${type.toLowerCase()}s_loading",

    ADD_${type.toUpperCase()}: "add_${type.toLowerCase()}",
    ADD_${type.toUpperCase()}_LOADING: "add_${type.toLowerCase()}_loading",

    EDIT_${type.toUpperCase()}: "edit_${type.toLowerCase()}",
    EDIT_${type.toUpperCase()}_LOADING: "edit_${type.toLowerCase()}_loading",

    DELETE_${type.toUpperCase()}: "delete_${type.toLowerCase()}",
    DELETE_${type.toUpperCase()}_LOADING: "delete_${type.toLowerCase()}_loading",

    SAVE_${type.toUpperCase()}S: "save_${type.toLowerCase()}s",
    RESET_${type.toUpperCase()}S: "reset_${type.toLowerCase()}s",
    //.type
}

export default ${typeFirstUpperCase}ActionType;
`;
}

function getCustomActionCreator(action, functionName, actionType, loading) {
    const typeFirstUpperCase = upperCaseFirst(action);
    return `export function ${functionName}(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.${actionType},
        payload
    }
}

${loading ? 
    `export function ${functionName}Loading(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.${actionType}_LOADING,
        payload
    }
}` : ''}

//.function
`
}

function getCustomActionType(actionType, loading) {
    return `${actionType}: "${actionType.toLowerCase()}",
${loading ? `${actionType}_LOADING: "${actionType.toLowerCase()}_loading",` : ''}
//.type
`
}

function getDefaultActionCreator(type) {

    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstUpperCase}ActionType from "./${typeFirstLowerCase}ActionType";

//.function
`;

}

function getDefaultActionType(type) {
    const typeFirstUpperCase = upperCaseFirst(type);

    return `const ${typeFirstUpperCase}ActionType = {
    //.type
}

export default ${typeFirstUpperCase}ActionType;
`;
}



module.exports = {
    getDataForActionCreator,
    getDataForActionType,
    getCustomActionCreator,
    getCustomActionType,
    getDefaultActionCreator,
    getDefaultActionType,
};