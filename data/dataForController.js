const { lowerCaseFirst, upperCaseFirst } = require('./../helper');

function getDataForController(type) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `import {
    get${typeFirstUpperCase}sLoading,
    add${typeFirstUpperCase}Loading,
    edit${typeFirstUpperCase}Loading,
    delete${typeFirstUpperCase}Loading,
} from './../store/actions/${typeFirstLowerCase}/${typeFirstLowerCase}ActionCreator';

class ${typeFirstUpperCase}Controller {

    constructor(selector, sdk) {
        this._selector = selector;
        this._sdk = sdk;
    }

    async get(store, action) {
        try {
            store.dispatch(get${typeFirstUpperCase}sLoading({payload: true}));
            
            const response = await this._sdk.get();            
        } finally {
            store.dispatch(get${typeFirstUpperCase}sLoading({payload: false}));
        }
    }

    async add(store, action) {
        try {
            store.dispatch(add${typeFirstUpperCase}Loading({payload: true}));
            
            const response = await this._sdk.add();
        } finally {
            store.dispatch(add${typeFirstUpperCase}Loading({payload: false}));
        }
    }

    async edit(store, action) {
        try {
            store.dispatch(edit${typeFirstUpperCase}Loading({payload: true}));
            
            const response = await this._sdk.edit(id, data);
        } finally {
            store.dispatch(edit${typeFirstUpperCase}Loading({payload: false}));
        }
    }

    async delete(store, action) {
        try {
            store.dispatch(delete${typeFirstUpperCase}Loading({payload: true}));
            
            const response = await this._sdk.delete(id);
        } finally {
            store.dispatch(delete${typeFirstUpperCase}Loading({payload: false}));
        }
    }
}


export default ${typeFirstUpperCase}Controller;
`
}

module.exports = {
    getDataForController
}