// .flat()
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2)); //Puedes colocar cuanto valor quieras dentro de flat(), este valor nos indica el nivel de profundidad del arreglo

// .flatMap()
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

// .trimStart()
let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

// .trimEnd()
let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());


try {

} catch {
  error
}

// Object.fromEntries()
let entries = [["name", "Julio"], ["age", 37]];

console.log(Object.fromEntries(entries));

// .description
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);