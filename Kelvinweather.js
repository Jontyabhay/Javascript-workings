//This sets the variable kelvin to 293
const kelvin = 293;
//This converts kelvin to celsius
const celsius = kelvin - 273;
//converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounds off fahrenheit to nearest decimal
fahrenheit = Math.floor(fahrenheit);
console.log( `The temperature is ${fahrenheit} degrees fahrenheit`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);
