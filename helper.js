function upperCaseFisrt(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function lowerCaseFirst(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toLowerCase() + s.slice(1);
}

module.exports = {
    upperCaseFisrt,
    lowerCaseFirst,
}