//OBJECT ENTRIES
const data = {
  frontend: 'Julio',
  backend: 'Sofía',
  design: 'Camila'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//OBJECT VALUES
const data = {
  frontend: 'Julio',
  backend: 'Sofía',
  design: 'Camila', //trailing comma
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//PADDING
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' _____'));

//ASYNC AWAIT
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false) //Aquí probamos nuestro código colocando true o false
      ? setTimeout(() =>resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

//Esta es la forma propuesta para manejar correctamente los errores
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
