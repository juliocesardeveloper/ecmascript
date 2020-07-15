
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

let hello = "Hello";
let world = "World";
