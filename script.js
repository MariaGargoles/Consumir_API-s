

//1. Consumir (fetch) la API de usuarios 
//https://fakerapi.it/api/v1/users?_quantity=20&_gender=male 
import { setupFilterInput } from './module1.js';

let users = [];

const request = fetch('https://fakerapi.it/api/v1/persons?_quantity=20')
  .then((response) => {
    if (response.ok) {
      response.json()
        .then((jsonData) => {
          users = jsonData.data; 
          console.log(users);
          writeHtml(users);
        })
        .catch((error) => alert('Error'));
    }
  })
  .catch((error) => alert('Error'));

const root = document.getElementById("root");

const writeHtml = (users) => { 
  root.innerHTML = ""; 
  users.forEach(person => {
    const pElement = document.createElement("p");
    pElement.innerText = `ID: ${person.id}, Nombre: ${person.firstname}, Apellidos: ${person.lastname}, Email: ${person.email}, Telefono: ${person.phone}, Cumpleaños: ${person.birthday}, Direccion: ${person.address.street}, web ${person.website}, img ${person.image}`;
    root.appendChild(pElement);
  });
};

console.log(users)

