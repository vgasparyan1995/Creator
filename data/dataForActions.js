const { lowerCaseFirst, upperCaseFisrt } = require('./../helper');

function getDataForActionCreator(type) {
    const typeFirstUpperCase = upperCaseFisrt(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstUpperCase}ActionType from "./${typeFirstLowerCase}ActionType";

function get${typeFirstUpperCase}s(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.GET_${type.toUpperCase()}S,
        payload
    }
}

function get${typeFirstUpperCase}sLoading(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.GET_${type.toUpperCase()}S_LOADING,
        payload
    } 
}

function add${typeFirstUpperCase}(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.ADD_${type.toUpperCase()},
        payload
    }
}

function add${typeFirstUpperCase}Loading(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.ADD_${type.toUpperCase()}_LOADING,
        payload
    }
}

function edit${typeFirstUpperCase}(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.EDIT_${type.toUpperCase()},
        payload
    }
}

function edit${typeFirstUpperCase}Loading(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.EDIT_${type.toUpperCase()}_LOADING,
        payload
    }
}

function delete${typeFirstUpperCase}(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.DELETE_${type.toUpperCase()},
        payload
    }
}

function delete${typeFirstUpperCase}Loading(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.DELETE_${type.toUpperCase()}_LOADING,
        payload
    }
}

function save${typeFirstUpperCase}s(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.SAVE_${type.toUpperCase()}S,
        payload
    }
}

function reset${typeFirstUpperCase}s(payload) {
    return {
        type: ${typeFirstUpperCase}ActionType.RESET_${type.toUpperCase()}S,
        payload
    }
}
`;
}

function getDataForActionType(type) {
    const typeFirstUpperCase = upperCaseFisrt(type);

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
}

export default ${typeFirstUpperCase}ActionType;
`;
}

module.exports = {
    getDataForActionCreator,
    getDataForActionType,
};