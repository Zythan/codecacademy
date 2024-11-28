// const validMoveTypeAll=(moveOneType,moveTwoType,moveThreeType) => {
//     let a=1
//     let moveType = {        
//         'rock'   : true,
//         'paper'  : true,
//         'scissors': true        
//     }
//     // console.log('valMove',moveType[moveOneType] && moveType[moveTwoType] && moveType[moveThreeType])
//     // console.log(moveType[moveOneType] , moveType[moveTwoType] , moveType[moveThreeType])
//     return (moveType[moveOneType] && moveType[moveTwoType] && moveType[moveThreeType])
// }

const validMoveType=(moveTypeIn) => {
    let a = 1
    let moveType = {        
        'rock'   : true,
        'paper'  : true,
        'scissors': true        
    }
    // console.log('valMove',moveType[moveOneType] && moveType[moveTwoType] && moveType[moveThreeType])
    // console.log(moveType[moveOneType] , moveType[moveTwoType] , moveType[moveThreeType])
    return (moveTypeIn[moveType])
}

//console.log(moveType)

console.log(validMoveType('rock'))























// const validateMoveType=(moveOneType,moveTwoType,moveThreeType) => {
//     let moveType = {        
//         'rock'   : true,
//         'paper'  : true,
//         'scissors': true        
//     } 
//     console.log(moveType[moveOneType] && moveType[moveTwoType] && moveType[moveThreeType])
//     return (moveType[moveOneType] && moveType[moveTwoType] && moveType[moveThreeType])
// }

// console.log(validateMoveType('rock','kat','scissors'))
// console.log(!validateMoveType('rock','paper','scissors'))

// console.log('-------------------------------------')
// console.log(playerOneMoveOneType )
// console.log(playerOneMoveTwoType )
// console.log(playerOneMoveThreeType)
// console.log(playerOneMoveOneValue)
// console.log(playerOneMoveTwoValue)
// console.log(playerOneMoveThreeValue)
// console.log(playerTwoMoveOneType)
// console.log(playerTwoMoveTwoType)
// console.log(playerTwoMoveThreeType)
// console.log(playerTwoMoveOneValue)
// console.log(playerTwoMoveTwoValue)
// console.log(playerTwoMoveThreeValue)
// console.log('-------------------------------------')
// console.log('p1-type' ,!validateMoveType (playerOneMoveOneType ,playerOneMoveTwoType ,playerOneMoveThreeType )) 
// console.log('p1-value',!validateMoveValue(playerOneMoveOneValue,playerOneMoveTwoValue,playerOneMoveThreeValue)) 
// console.log('p2-type' ,!validateMoveType (playerTwoMoveOneType ,playerTwoMoveTwoType ,playerTwoMoveThreeType )) 
// console.log('p2-value',!validateMoveValue(playerTwoMoveOneValue,playerTwoMoveTwoValue,playerTwoMoveThreeValue)) 
// console.log('-------------------------------------')
