const conceptPromiseAll = () => {
    let promise1 = Promise.resolve(5); //A promise that just resolves into a value..no return needed
    let promise2 = 44; //just a value doesn't need to be a promise
    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        console.log(values);
    });
}
//conceptPromiseAll()
let alert = require('alert'); 
alert("message")
const conTryCatch = () => {
    let json = '{ "age": 30 }'; // incomplete data
    try {
        let user = JSON.parse(json); // <-- no errors
        alert(user.name); // no name!
    } catch (e) {
        alert("Invalid JSON data!");
    }
}
conTryCatch()