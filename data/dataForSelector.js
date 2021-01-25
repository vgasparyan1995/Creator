const {lowerCaseFirst, upperCaseFirst} = require('./../helper');

function getDataForSelector(type) {
    const typeFirstUpperCase = upperCaseFirst(type);
    const typeFirstLowerCase = lowerCaseFirst(type);

    return `class ${typeFirstUpperCase}Selector {

    _getReducer(state) {
        return state.${typeFirstLowerCase}Reducer;
    }
    
    getData(state) {
        return this._getReducer(state).${typeFirstLowerCase}s;
    }
    
    getDataLoading(state) {
        return this._getReducer(state).get${typeFirstUpperCase}sLoading;
    }
    
    addDataLoading(state) {
        return this._getReducer(state).add${typeFirstUpperCase}Loading;
    }
    
    editDataLoading(state) {
        return this._getReducer(state).edit${typeFirstUpperCase}Loading;
    }

    deleteDataLoading(state) {
        return this._getReducer(state).delete${typeFirstUpperCase}Loading;
    }
    
    //.function
}
export default new ${typeFirstUpperCase}Selector();
`
}

module.exports = {
    getDataForSelector
};