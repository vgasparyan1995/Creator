function getDataForActionCreator(type) { 
    return `import ${type}ActionType from "./${type}ActionType";

function get${type}s(payload) {
    return {
        type: ${type}ActionType.GET_${type.toUpperCase()}S,
        payload
    }
}

function get${type}sLoading(payload) {
    return {
        type: ${type}ActionType.GET_${type.toUpperCase()}S_LOADING,
        payload
    } 
}

function add${type}(payload) {
    return {
        type: ${type}ActionType.ADD_${type.toUpperCase()},
        payload
    }
}

function add${type}Loading(payload) {
    return {
        type: ${type}ActionType.ADD_${type.toUpperCase()}_LOADING,
        payload
    }
}

function edit${type}(payload) {
    return {
        type: ${type}ActionType.EDIT_${type.toUpperCase()},
        payload
    }
}

function edit${type}Loading(payload) {
    return {
        type: ${type}ActionType.EDIT_${type.toUpperCase()}_LOADING,
        payload
    }
}

function delete${type}(payload) {
    return {
        type: ${type}ActionType.DELETE_${type.toUpperCase()},
        payload
    }
}

function delete${type}Loading(payload) {
    return {
        type: ${type}ActionType.DELETE_${type.toUpperCase()}_LOADING,
        payload
    }
}

function save${type}s(payload) {
    return {
        type: ${type}ActionType.SAVE_${type.toUpperCase()}S,
        payload
    }
}

function reset${type}s(payload) {
    return {
        type: ${type}ActionType.RESET_${type.toUpperCase()}S,
        payload
    }
}
`;
}

function getDataForActionType(type) {
 return `const ${type}ActionType = {
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

export default ${type}ActionType;
`;
}

module.exports = {
    getDataForActionCreator,
    getDataForActionType,
};