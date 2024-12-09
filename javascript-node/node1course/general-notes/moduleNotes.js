//Power shell prompt
//Function Prompt { "$( ( get-item $pwd ).Name )>" }
//Function Prompt { "$pwd>" } 

//REPLs are processes that read, evaluate, print

//built in modules
//Console info
let conarry = [1,2,3,4]
console.log(`Log::Notes on Node`)
console.assert(false,`Assert`)
console.table(conarry)

//process
//arg[0] = absolute path to Node
//arg[1] = path to the file that’s running.
//arg[2] = 1st command line parameter
const comm2 = process.argv[2] 
console.log (comm2)

const memUsage = process.memoryUsage()
console.log(memUsage)
console.log(memUsage['heapTotal'])
process.env.NODE_ENV = 'development'
console.log(process.env.NODE_ENV)

//needs import (require)
//OS
const os = require('os');
console.log(os.type())
console.log(os.arch())
console.log(os.networkInterfaces())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.uptime())

//util
const util = require('util')
const today = new Date()
const earthDay = 'April 22, 2022'
console.log(util.types.isDate(today))
console.log(util.types.isDate(earthDay))
//util.promisify() -- see promisify.js

//extras
// The console and process modules are global and don't need to be required to use!
//const os = require('os');
//const util = require('util');

const func1 = () => {
  console.log("hi")
}
func1()
console.count('func1')
process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information',
})
console.log(os.freemem())
console.log(util.format('%s:%s', 'foo','bar'))
