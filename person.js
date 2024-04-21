
class Person {
    constructor(id, firstName, lastName) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        
    }
    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    
}

class Users extends Person {
   constructor(email ,phone , birthday, address ){
    super(id, firstName, lastName);
    this._email = email;
    this._phone= phone;
    this._birthday = birthday;
    this.address = address;

   }     

}

