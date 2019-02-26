/*

The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."

*/

// const CelsTempToday = 25
// const cels2Far = (((tempToday * 9) / 5) + 32);
// const far2Cels = (((tempToday - 32) * 5) / 9);
//
// console.log();

/*

let celsius = 22;
let fahrenheit = celsius * 1.8 + 32;

console.log(`${ celsius }°C is ${ fahrenheit }°F`);

let celsius = (fahrenheit - 32) / 1.8;
console.log(`${ fahrenheit }°F is ${ celsius }°C`);

*/

const tempConvert = function (celsius, farenheit) {
  const c = (farenheit - 32) / 18;
  const f = celsius * 1.8 + 32;
  console.log(`Conversion of ${ celsius } farenheit to celcius is ${ c.toFixed(2) }.`);
  console.log(`Conversion to ${ farenheit } celsius to farenheit is ${ f.toFixed(2) }`);
};

tempConvert(71.6, 54);
tempConvert(1, 1);
