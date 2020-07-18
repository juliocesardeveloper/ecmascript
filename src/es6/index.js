
//DEFAULT PARAMS
//Antes de ECMAscript 6
function newFunction(name, age, country) {
  var name = name || 'Julio';
  var age = age || 37;
  var country = country || 'CO';
  console.log(name, age, country);
}

//Con ECMAscript 6
function newFunction2(name = 'Julio', age = 37, country = 'CO') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Camila', '18', 'CO');

//CONCATENACIÓN
// Concatenación antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Concatenación con ES6 (Template literals - Comillas invertidas)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//MULTILÍNEA
//Multilínea antes de ES6
let lorem = "Finished with my woman cause she \n"
+ "couldn't help me with my mind.";

//Multilínea con ES6
let lorem2 = `I need someone to show me
the things in life that I can't fight.`;

console.log(lorem);
console.log(lorem2);

//DESESTRUCTURACIÓN
//Desestructuración antes de ES6
let person = {
  'name' : 'Julio',
  'age' : 37,
  'country' : 'CO'
}
console.log(person.name, person.age);

//Desestructuración con ES6
let { name, country } = person;
console.log(name, country);

//SPREAD OPERATOR (OPERADOR DE PROPAGACIÓN)
let team1 = ['Julio', 'Camila', 'Patricia'];
let team2 = ['Daniel', 'Juan', 'Wilson'];

let education = ['Cristina', ...team1, ...team2];

console.log(education);

//LET Y CONST
//scope -> código de bloque en el cual va a ser llamado

{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

//PARÁMETROS EN OBJETOS
let name = 'Julio';
let age = 37;
//Antes de ES6
obj = { name: name, age: age };

//Con ES6
obj2 = { name, age };
console.log(obj2);

//ARROW FUNCTIONS (son funciones anónimas)
const names = [
  { name: 'Julio', age: 32 },
  { name: 'Camila', age: 18 }
]

//Antes de ES6
let listOfNames = names.map(function (item) {
  console.log(item.name)
})

//Con ES6
let listOfNames2 = names.map(item => console.log(item.name));

//Otras formas
const listOfNames3 = (name, age, country) => {
  //Código
}

const listOfNames4 = name => {
  //código
}

const square = num => num * num;

//PROMESAS (PARA TRABAJAR EL ASINCRONISMO)
//Investigar: cómo trabajar con promesas y cómo se pueden hacer llamados (peticiones) a una API
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Cool!')
    }else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola')) //Se pueden anidar varios elementos then
  .catch(error => console.log(error));

//CLASES
//constructor => es el método para inicializar la clase
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  //Método
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//MÓDULOS
import { hello } from './module';

hello();

//GENERADORES (GENERATORS)
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

