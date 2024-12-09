function celsiusToFahrenheit(celesius) {
    return celesius * (9/5) + 32
}

//seperate export
module.exports.celsiusToFahrenheit = celsiusToFahrenheit

module.exports.celsiusToFahrenheitLog = function(celesius) {
    return console.log(celesius * (9/5) + 32)
}

//Destructure require in water-limits.js
module.exports.fahrenheitToCelsiusLog = (fahrenheit) => {
    console.log((fahrenheit-32) / (9/5))
}

//inline export arrow function
module.exports.fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit-32) / (9/5) 
}
