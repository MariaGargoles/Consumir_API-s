//1. Consumir (fetch) la API de usuarios https://fakerapi.it/api/v1/users?_quantity=20&_gender=male 


fetch('https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01')
  .then(response => response.json())
  .then(data => console.log(data));
