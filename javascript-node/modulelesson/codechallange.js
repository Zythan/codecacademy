
const radius = 5;
const sideLength = 10;

//app.js (i like my namebetter)
const {circleArea,squareArea} = require('./shape-area.js')
let areaOfCircle = circleArea(radius)
let areaOfSquare = squareArea(sideLength)
console.log(areaOfCircle)
console.log(areaOfSquare)