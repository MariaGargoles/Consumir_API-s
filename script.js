//1. Consumir (fetch) la API de usuarios 
//https://fakerapi.it/api/v1/users?_quantity=20&_gender=male 


fetch('https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01')
  .then((response) => {
    if (response.ok) {
      response
        .json()
        .then(data => console.log(data))
        .catch((error) => alert("Problemas con la info de la API"));
    } else {
      throw new Error('La respuesta no fue exitosa');
    }
  })
  .catch((error) => alert("Error en la API"));

//2. Crear las clases de Persona y Usuarios, 
//teniendo en cuenta que tienen propiedades comunes
