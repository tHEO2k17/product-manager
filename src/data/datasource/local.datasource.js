class LocalDataSource {

    get(key) {
        setTimeout(() => {
            return JSON.parse(localStorage.getItem(key));
        }, 1500);
    }

    save(key, data) {
        setTimeout(() => {
            data = JSON.stringify(data);
            localStorage.setItem(key, data);
        }, 1500);
    }
}

export default LocalDataSource;