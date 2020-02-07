function getDataForController(type) {
    return `import {
    get${type}sLoading,
    add${type}Loading,
    edit${type}Loading,
    delete${type}Loading,
} from './../store/actions/${type}/${type}ActionCreator';

class ${type}Controller {

    constructor(selector, sdk) {
        this._selector = selector;
        this._sdk = sdk;
    }

    async get(store, action) {
        try {
            store.dispatch(get${type}sLoading({payload: true}));
            
            const response = await this._sdk.get();            
        } finally {
            store.dispatch(get${type}sLoading({payload: false}));
        }
    }

    async add(store, action) {
        try {
            store.dispatch(add${type}Loading({payload: true}));
            
            const response = await this._sdk.add();
        } finally {
            store.dispatch(add${type}Loading({payload: false}));
        }
    }

    async edit(store, action) {
        try {
            store.dispatch(edit${type}Loading({payload: true}));
            
            const response = await this._sdk.edit(id, data);
        } finally {
            store.dispatch(edit${type}Loading({payload: false}));
        }
    }

    async delete(store, action) {
        try {
            store.dispatch(delete${type}Loading({payload: true}));
            
            const response = await this._sdk.delete(id);
        } finally {
            store.dispatch(delete${type}Loading({payload: false}));
        }
    }
}


export default ${type}Controller;
`
}

module.exports = {
    getDataForController
}