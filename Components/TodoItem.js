export default class TodoItem {
    constructor(title, value) {
        this.title = title;
        this.value = value;
        this.history = [];
    }

    update(value) {
        this.history.push(this.value);
        this.value = value;
    }

    undoUpate() {
        this.value = this.history[-1];
        this.history.pop();
    }

    clearHistory() {
        this.history = []
    }
}