function getDataForActionsRegistration(type) {
    return `import ${type}ActionTypes from "../actions/${type}/${type}ActionType";
import {${type}} from "../../services/ControllerManager";
    
export default function ${type}Registration(configs) {
    configs.set(${type}ActionTypes.GET_${type.toUpperCase()}S, ${type}.get.bind(${type}));
    configs.set(${type}ActionTypes.ADD_${type.toUpperCase()}, ${type}.add.bind(${type}));
    configs.set(${type}ActionTypes.EDIT_${type.toUpperCase()}, ${type}.edit.bind(${type}));
    configs.set(${type}ActionTypes.DELETE_${type.toUpperCase()}, ${type}.delete.bind(${type}));
}
`
}

function getIndexActionsRegistration(type) {
    return `import ${type}Registration from "./${type}Registration";
//.import

const configs = new Map();

${type}Registration(configs);
//.construct

export default configs;
`
}

module.exports = {
    getDataForActionsRegistration,
    getIndexActionsRegistration,
};