/* water-limits.js */
// function celsiusToFahrenheit(celsius) {
//   return celsius * (9/5) + 32;
// }

//all exports into converters
const converters = require('./converters.js')
//destructured single import has to have same name as in module
const {fahrenheitToCelsiusLog} = require('./converters.js')

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
converters.celsiusToFahrenheitLog(-100)
fahrenheitToCelsiusLog(-472)
converters.fahrenheitToCelsiusLog(500)