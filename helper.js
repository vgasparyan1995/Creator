function upperCaseFisrt(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function lowerCaseFirst(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toLowerCase() + s.slice(1);
}

function convertCamelCase(s)  {
    let result = s.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "");
    return result.toUpperCase();
}

module.exports = {
    upperCaseFisrt,
    lowerCaseFirst,
    convertCamelCase,
}