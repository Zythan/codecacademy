const readline = require('readline')
const fs = require('fs')

const inputInterface = readline.createInterface({
    input: fs.createReadStream('./file.txt')
})

// inputInterface.on('line',(fileLine) => {
//     console.log(`the line read: ${fileLine}`)
// })

const fileOut = (data) => {
    console.log(data)
}
inputInterface.on('line',fileOut)

const filestream = fs.createWriteStream('./output.txt');


const fileWork = () => new Promise((resolved,err)=>{
    setTimeout(() => {           
        filestream.write('This is first line\n')
        filestream.write('this is second line\n')        
        filestream.end()
        return resolved(true)
    },5000)
})



// const inputStream2 = readline.createInterface({    
//     input: fs.createReadStream('./output.txt')
// })
//inputStream2.on('line',fileOut)

fileWork()
  .then(() => {    
    const inputStream2 = readline.createInterface({    
    input: fs.createReadStream('./output.txt')
    })
    inputStream2.on('line',fileOut)    
  })
  .catch((err) => {
    console.log(`wtf!!!! ${err}`)
  })


