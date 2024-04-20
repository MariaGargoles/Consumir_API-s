//1. Consumir (fetch) la API de usuarios 
//https://fakerapi.it/api/v1/users?_quantity=20&_gender=male 


const request = fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
  .then((response) => {
    if (response.ok) {
      response.json()
        .then((jsonData) => {
          pArray = jsonData.data;
          console.log(pArray);
          writeHtml(pArray);
        })
        .catch((error) => alert('Error'));
    }
  })
  .catch((error) => alert('Error'));

let pArray = [];

const root = document.getElementById("root");

const writeHtml = (pArray) => {
  pArray.forEach(person => {
    const pElement = document.createElement("p");
    pElement.innerText = `ID: ${person.id}, Nombre: ${person.firstname}, Apellidos: ${person.lastname}, Email: ${person.email}, Telefono: ${person.phone}, Cumpleaños: ${person.birthday}, Direccion: ${person.address}`;
    root.appendChild(pElement);
  });
};



    
    



 
    

      
          
   

//2. Crear las clases de Persona y Usuarios, 
//teniendo en cuenta que tienen propiedades comunes
