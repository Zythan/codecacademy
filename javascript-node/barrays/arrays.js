let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length)
let lastIndexValue = secretMessage.pop() //descructive removes last element and returns it
console.log(lastIndexValue)
console.log(secretMessage.length)
secretMessage.push('to','Program')
console.log(secretMessage.length)
secretMessage[secretMessage.indexOf('easily')] = 'right'
console.log(secretMessage)
secretMessage.shift()
console.log(secretMessage[0])
//.splice(startingIndex, numDeletions, replacement1, replacement2, ... )
secretMessage.splice(secretMessage.indexOf('get'),5,'know')
console.log('-----')
console.log(secretMessage.join(' '))
//yep yep yep commit bitch

