let urlWeakMap = new WeakMap();

export default class ToDoModel {
    get url() {
        return urlWeakMap.get(this);
    }

    set url(val) {
        urlWeakMap.set(this, val);
    }

    constructor(collectionUrl, data) {
        this.url = collectionUrl;

        this.setData(data);

        console.log('model constructor', this.url);
    }

    setData(data) {
        Object.assign(this, data);
    }

    delete() {
        return fetch(`${this.url}/${this.id}`, {
            method: 'DELETE'
        });
    }

    edit() {
        console.log('model is edit', this.id);
        return fetch(`${this.url}/${this.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        });
    }
}