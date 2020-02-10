function getBaseException() {
    return `class BaseExcpetion {
    next = {
        handleRequest: function () {
        }
    };

    setNext = function(next) {
        this.next = next;
    };

    handleRequest = function () { };
}

export default BaseExcpetion;
`
}

function getBadRequestException() {
    return `import BaseException from './baseException.js';
import AppConstants from './../../../settings/constants.js';

class BadRequestException extends BaseException {

    handleRequest = function (request) {        
        if (request.status === 400) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 400,
                error_message: request.Message || AppConstants.network.network_errors.BAD_REQUEST,
            };
        }

        return this.next.handleRequest(request);
    }
}

export default BadRequestException;
`
}

function getTokenExpiredException() {
    return `import BaseException from './baseException.js';
import AppConstants from './../../../settings/constants.js';

class TokenExpiredException extends BaseException {

    handleRequest = function (request) {        
        if (request.status === 400) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 401,
                error_message: request.Message || AppConstants.network.network_errors.TOKEN_EXPIRED,
            };
        }

        return this.next.handleRequest(request);
    }
}

export default TokenExpiredException;
`
}

function getInternalException() {
    return `import BaseException from './baseException.js';
import AppConstants from './../../../settings/constants.js';

class InternalException extends BaseException {

    handleRequest = function (request) {        
        if (request.status === 500) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 401,
                error_message: request.Message || AppConstants.network.network_errors.INTERNAL_ERROR,
            };
        }

        return this.next.handleRequest(request);
    }
}

export default InternalException;
`
}

module.exports = {
    getBaseException,
    getBadRequestException,
    getTokenExpiredException,
    getInternalException,
}