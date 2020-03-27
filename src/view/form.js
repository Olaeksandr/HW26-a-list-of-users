export default class FormView {
    constructor(config) {
        this.config = config;

        this.createElement();
        this.el.addEventListener('submit', this.onSubmit.bind(this));
        this.nameInput = this.el.querySelector('#nameInput');
        this.surnameInput = this.el.querySelector('#surnameInput');
        this.emailInput = this.el.querySelector('#emailInput');
    }

    onSubmit(e) {
        e.preventDefault();
        this.config.onSave({
            name: this.nameInput.value,
            surname: this.surnameInput.value,
            email: this.emailInput.value,
        });
    }

    createElement() {
        this.el = document.createElement('tfoot');
        this.el.innerHTML = `
            
                <tr>
                    <td>
                        <input
                            type="hidden"
                            name="id"
                            id="idInput"
                            class="form-input"
                        />
                        <input
                            type="text"
                            name="name"
                            id="nameInput"
                            class="form-input"
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="surname"
                            id="surnameInput"
                            class="form-input"
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="email"
                            id="emailInput"
                            class="form-input"
                        />
                    </td>
                    <td><button id="saveUserBtn">Save</button></td>
                </tr>
            </table>  
        `;
    }
}