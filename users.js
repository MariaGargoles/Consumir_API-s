import Person from './person.js';

class Users extends Person {
    constructor(id, firstName, lastName, email, phone, birthday, address) {
        super(id, firstName, lastName);
        this._email = email;
        this._phone = phone;
        this._birthday = birthday;
        this._address = address;
    }

    get email() {
        return this._email;
    }

    get phone() {
        return this._phone;
    }

    get birthday() {
        return this._birthday;
    }

    get address() {
        return this._address;
    }
}

export default Users;
