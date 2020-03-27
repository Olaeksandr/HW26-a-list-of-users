export default class ListView {
    constructor(config) {
        this.config = config; 
        this.createElement();
    }

    createElement() {
        this.el = document.createElement('tfoot');
        
        this.el.addEventListener('click', this.onListClick.bind(this));
    }

    onListClick(e) {
        console.log(e, this);
        switch (true) {
            case e.target.classList.contains('delete-btn'):
                this.config.onDelete(e.target.closest('.user-item').dataset.id);
                break;
            case e.target.classList.contains('edit-btn'):
                this.config.onEdit(e.target.closest('.user-item').dataset.id);
                break;
        }
    }

    render(data) {
        this.el.innerHTML = data.map(this.renderItem).join('\n');
    }

    renderItem(user) {
        return ` <tfoot><tr class="user-item" data-id="${user.id}">
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.email}</td>
        <td>
            <button type="button" class="delete-btn">Delete</button>
            <button type="button" class="edit-btn">Edit</button>
        </td></tr></tfoot>`;
    }
}