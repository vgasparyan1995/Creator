function getDataForCacheService() {
    return `class CacheService {

    get(key) {
        try {
            const value = localStorage.getItem(key);
            return value;
        } catch (err) {
            console.log('Local Storage err == ', err);
        }
    }
    
    set(key, value) {
        try {
            if (!value) {
                localStorage.setItem(key, '');
                return;
            }

            localStorage.setItem(key, value);
        } catch (err) {
            console.log('Local Storage err == ', err);
        }
    }

    clear() {
        localStorage.clear();
    }
}

export default new CacheService();
`
}

module.exports = {
    getDataForCacheService
}