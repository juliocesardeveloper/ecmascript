
//OPERADOR DE REPOSO
const obj = {
  name: 'Julio',
  age: 37,
  country: 'CO'
};

//llama al nombre y lo demás lo encapsula en ...all (all puede ser cualquier nombre)
let { name, ...all } = obj; 
console.log(name, all);

//Aquí se llama a todo lo demás menos a country
let { country, ...todo } = obj;
console.log(todo);

//Estructuración
const obj = {
  name: 'Julio',
  age: 37
}

const obj1 = {
  ...obj,
  country: 'CO'
}

console.log(obj1);


const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) //Aquí se prueba el código con true o false
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó'))


//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-07-18');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);