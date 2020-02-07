const { lowerCaseFirst, upperCaseFisrt } = require('./../helper');

function getDataForActionsRegistration(type) {
    const typeFirstUpperCase = upperCaseFisrt(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstUpperCase}ActionTypes from "./../actions/${typeFirstLowerCase}/${typeFirstLowerCase}ActionType";
import {${typeFirstLowerCase}} from "./../../managers/controllerManager";
    
export default function ${typeFirstLowerCase}Registration(configs) {
    configs.set(${typeFirstUpperCase}ActionTypes.GET_${type.toUpperCase()}S, ${typeFirstLowerCase}.get.bind(${typeFirstLowerCase}));
    configs.set(${typeFirstUpperCase}ActionTypes.ADD_${type.toUpperCase()}, ${typeFirstLowerCase}.add.bind(${typeFirstLowerCase}));
    configs.set(${typeFirstUpperCase}ActionTypes.EDIT_${type.toUpperCase()}, ${typeFirstLowerCase}.edit.bind(${typeFirstLowerCase}));
    configs.set(${typeFirstUpperCase}ActionTypes.DELETE_${type.toUpperCase()}, ${typeFirstLowerCase}.delete.bind(${typeFirstLowerCase}));
}
`
}

function getIndexActionsRegistration(type) {
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import ${typeFirstLowerCase}Registration from "./${typeFirstLowerCase}Registration";
//.import

const configs = new Map();

${typeFirstLowerCase}Registration(configs);
//.construct

export default configs;
`
}

module.exports = {
    getDataForActionsRegistration,
    getIndexActionsRegistration,
};