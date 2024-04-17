//1. Consumir (fetch) la API de usuarios 
//https://fakerapi.it/api/v1/users?_quantity=20&_gender=male 

const data =  [];
const request = fetch('https://fakerapi.it/api/v1/persons?_quantity=10').then(
    (response) => {
    if (response.ok) {
      return response.json();
      jsonData.push(data)
      

    }
  })
  .then((jsonData) => {
    
    const container = document.getElementById("root");


    function addPerson(data) {
        
        data.forEach(person => {
          const pElement = document.createElement("p");
          pElement.innerText = `Nombre: ${person.firstname}, Apellidos: ${person.lastname}, Email: ${person.email}, Telefono: ${person.phone}, Cumpleaños: ${person.birthday}, Direccion: ${person.address}`;
          container.appendChild(pElement);
          
        });
        console.log(jsonData)
      }
  
    
      addPerson();
  })
  .catch((error) => {
    alert("Error en la API" + error);
  });


//2. Crear las clases de Persona y Usuarios, 
//teniendo en cuenta que tienen propiedades comunes
