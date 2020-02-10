function getDataForExceptionHandlerService() {
    return `class ExceptionHandlerService {
    constructor(exceptions) {
        this._exceptions = exceptions;
        for (let ix = 0; ix < this._exceptions.length - 1; ++ix) {
            let current_index = ix;
            this._exceptions[current_index].setNext(this._exceptions[++current_index])
        }
    }
    execute = async function (request) {
        return this._exceptions[0].handleRequest(request) || null;
    }
}

export default ExceptionHandlerService;
`
}

module.exports = {
    getDataForExceptionHandlerService
}