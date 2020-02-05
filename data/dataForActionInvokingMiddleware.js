function getDataForActionInvokingMiddleware() {
    return `const apiMiddleware = configs => store => next => action => {
    configs.get(action.type) && typeof configs.get(action.type) === 'function' ?
    configs.get(action.type)(store, action) : next(action);
};
    
export default apiMiddleware;
`
}

module.exports = {
    getDataForActionInvokingMiddleware
};