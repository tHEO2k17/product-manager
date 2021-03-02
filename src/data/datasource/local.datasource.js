class LocalDataSource {

    get(key) {
        return JSON.parse(localStorage.getItem(key)) ?? [];
    }

    save(key, data) {
        var storage = this.get(key);

        data.id = this.generateId(storage);
        storage.push(data);
        localStorage.setItem(key, JSON.stringify(storage));
    }

    generateId(data) {
        let item = data[data.length - 1];
        return item != null ? item.id + 1 : 0;
    }
}

export default new LocalDataSource();