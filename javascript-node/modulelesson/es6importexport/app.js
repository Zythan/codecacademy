//ES6 How to use ES6 modules :: Add npm init -y create package.json : "type": "module", : use arrow functions not function()
import {celsiusToFahrenheit,FahrenheitTocelsius,test} from './temp-util.js'

console.log('Start::')
console.log(celsiusToFahrenheit(0))
console.log(FahrenheitTocelsius(32))
test()
console.log('----------------------------')
//all imported at same time
import * as all from './temp-util.js'
console.log('Start::')
console.log(all.celsiusToFahrenheit(0))
console.log(all.FahrenheitTocelsius(32))
all.test()

//bonus how to read files!
import { readFile } from 'node:fs';
readFile('./foo.txt', (err, source) => {
  if (err) {
    console.error(err);
  } else {
    console.log(source.toString());
  }
}); 
