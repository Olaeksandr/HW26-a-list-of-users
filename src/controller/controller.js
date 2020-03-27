import ToDoCollection from '../model/collection';
import { contactsUrl } from '../config';
import ListView from '../view/list';
import FormView from '../view/form';

export default class Controller {
    constructor() {
        this.collection = new ToDoCollection(contactsUrl);
        this.listView = new ListView({
            onDelete: id => {
                this.collection.delete(id).then(() => this.renderData());
            },
            onEdit: id => {
                this.collection
                .get(id)
                .edit()
                .then(() => this.renderData());
            }
        });
        this.formView = new FormView({
            onSave: data => {
                this.collection.add(data).then(() => this.renderData());
            }
        });

        this.container = document.getElementById('usersList');

        this.container.append(this.formView.el);
        this.container.append(this.listView.el);

        this.refreshData();
    }

    refreshData() {
        this.collection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.listView.render(this.collection.list);
        console.log(this.collection.list);
    }
}