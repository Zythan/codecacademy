// Drum Arrays
let kicks = new Array(16).fill(false)
let snares = new Array(16).fill(false)
let hiHats = new Array(16).fill(false)
let rideCymbals = new Array(16).fill(false)

let arrayByName = {
    'kicks' : kicks,
    'snares' : snares,
    'hiHats' : hiHats,
    'rideCymbals':rideCymbals    
}

console.log('Start')
const toggleDrum = (arrayName,index) => {  
    // console.log(array)
    let drums = arrayByName[arrayName] 
    if (!drums || index === undefined || index > drums.length-1 || index < 0) return    
    drums[index] = !drums[index]
}

const clear = (arrayName) => {
    let array = arrayByName[arrayName]
    if(!array) return
    array.fill(false)

}
const invert = (arrayName) => {
    let array = arrayByName[arrayName]
    if(!array) return
    array.forEach((val,index) => {array[index] = !val})
}
 
const getNeighborPads = (x,y,size) => {
    if (x < 0 || x > 4 || y < 0 || y > 4 || x > size-1 || y > size-1) return []
    return [0]

}

// toggleDrum('kicks',0)
// arrayByName['kicks'].fill(true)
// invert('kicks')
// console.log('kicks::',kicks)