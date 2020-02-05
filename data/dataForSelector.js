function getDataForSelector(type) {
    return `class ${type}Selector {

    _getReducer(state) {
        return state.${type.toLowerCase()}Reducer;
    }
    
    getData(state) {
        return this._getReducer(state).${type.toLowerCase()}s;
    }
    
    getDataLoading(state) {
        return this._getReducer(state).${type.toLowerCase()}sLoading;
    }
    
    addDataLoading(state) {
        return this._getReducer(state).add${type}Loading;
    }
    
    editDataLoading(state) {
        return this._getReducer(state).edit${type}Loading;
    }

    deleteDataLoading(state) {
        return this._getReducer(state).delete${type}Loading;
    }    
}
export default new ${type}Selector();
`
}

module.exports = {
    getDataForSelector
};