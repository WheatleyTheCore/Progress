export default class TodoList {
    constructor() {
        this.list = [];
    }

    add(itemName) {
        this.list.push(itemName);
    }

    delete(itemName) {
        this.list.splice(this.list.indexOf(itemName), 1);
    }

    clear() {
        this.list = [];
    }
}