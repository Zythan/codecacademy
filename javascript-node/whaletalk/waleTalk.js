//rules
//There are no consonants. Only vowels excluding “y”.
//The u‘s and e‘s are extra long, so we must double them in our program.

const input = 'turpentine and turtles'
const vowels = ['a','e','i','o','u']

let resultArray = []

for (let i=0; i<input.length;i++) {
  //console.log(input[i])
  for(let j=0; j<vowels.length;j++) {
    //console.log(vowels[j])
    if (vowels.includes(input[i])) {
      let character = input[i]
      if (character === 'e' || character === 'u') {        
        resultArray.push(character,character)
        break
      }
      else {
        resultArray.push(character)
        break
      }
      // resultArray.push(character)
    }
  }
}
console.log(input)
console.log(resultArray)
let resultString = resultArray.join('').toUpperCase()
console.log(resultString)


