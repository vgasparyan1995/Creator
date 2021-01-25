const fs = require('fs');

function upperCaseFirst(s) {
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

function createFolder(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

function createFile(path, data) {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, data);
    }
}

function readFile(path) {
    return fs.readFileSync(path, 'utf8');
}

function writeFile(path, contents) {
    fs.writeFileSync(path, contents)
}

module.exports = {
    readFile,
    writeFile,
    createFile,
    createFolder,
    upperCaseFirst,
    lowerCaseFirst,
    convertCamelCase,
}