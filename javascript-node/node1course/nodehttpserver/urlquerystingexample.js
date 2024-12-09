const querystring = require('querystring')
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const queryToParse = url.split('?')[1]
console.log(queryToParse)

const parsedQuery = querystring.decode(queryToParse)
console.log(parsedQuery)

parsedQuery.exercise = 'querystring'
const modifiedQueryString = querystring.encode(parsedQuery)
console.log(modifiedQueryString)

//hmmmm ??? don't work
console.log('----------------------------------------')
const myUrl = new URL(url)
const query = myUrl.search
console.log(query)
console.log(query.split('?')[1])
const mod = querystring.encode(query)
console.log(mod)

