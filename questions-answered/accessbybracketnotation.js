//Suppose you had a trunk full of stuff the main object would be trunk

const trunk1 = {

}

//Inside the trunk you have a shirt that is red

const trunk2 = {
    'shirt' : 'red'
}

//to access the color of the shirt you would do
let shirtColor = trunk2['shirt']
console.log(shirtColor)
//output is red

// now you see there are many shirts of differnt types and colors
// so now you need a shirts object to store all the shirts in instead of making each one individually
const trunk3 = {
    'shirts' : {
        'turtle neck' : 'red',
        'pull over hoodie' : 'grey',
        'tank top' : 'blue'
    }
}

//now lets log shirts
console.log(trunk3['shirts'])
//our output is now the shirts object with the shirts listed
// {
//     'turtle neck': 'red',
//     'pull over hoodie': 'grey',
//     'tank top': 'blue'
// }

//Now lets get the color of the turtle neck again
const shirt = trunk3['shirts']['turtle neck']
console.log(shirt)
//And again output is red as that is what 'turtle neck' is the key of

//This can be carried on for as deep (nested) as you want to go.
//And for as many objects as you want need to use.
const trunk4 = {
    'shirts' : {
        'turtle neck' : 'red',
        'pull over hoodie' : 'grey',
        'tank top' : 'blue'
    },
    'toy car' : 'match box',
    'etc' : {
         'etc2':{
             'etc3':{
                'etc4' : "Hi There"
             }
          } 
     }     
}
console.log(trunk4['etc']['etc2']['etc3']['etc4'])
//Hope this helps
const functest = {
    'dfunction': () => {console.log('Fun with javascript!')}
}
functest['dfunction']()