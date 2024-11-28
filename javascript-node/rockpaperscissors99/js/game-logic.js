// All code should be written in this file.
//Player One todo probably should be object with values not this but going by the instructions
    
let playerOneMoveOneType 
let playerOneMoveTwoType 
let playerOneMoveThreeType
let playerOneMoveOneValue
let playerOneMoveTwoValue
let playerOneMoveThreeValue
//Player Two 
let playerTwoMoveOneType
let playerTwoMoveTwoType
let playerTwoMoveThreeType
let playerTwoMoveOneValue
let playerTwoMoveTwoValue
let playerTwoMoveThreeValue

let playerOneWins = 0
let playerTwoWins = 0
let ties = 0 //dont actually need

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType,moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) return
    if (!validMoveTypeAll(moveOneType,moveTwoType,moveThreeType) || !validMoveValueAll(moveOneValue,moveTwoValue,moveThreeValue)) { 
        return
    }
    if (player === 'Player One') {        
        playerOneMoveOneType =  moveOneType 
        playerOneMoveTwoType = moveTwoType
        playerOneMoveThreeType = moveThreeType
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeValue = moveThreeValue
    }      
    else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType 
        playerTwoMoveTwoType = moveTwoType
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveOneValue = moveOneValue
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeValue = moveThreeValue 
    }
    else {
        return
    }        
}

const setComputerMoves = () => {
   playerTwoMoveOneType    = 'rock'
   playerTwoMoveTwoType    = 'paper'
   playerTwoMoveThreeType  = 'scissors' 
   playerTwoMoveOneValue   = 25
   playerTwoMoveTwoValue   = 5
   playerTwoMoveThreeValue = 69
}

const validMoveTypeAll=(moveOneType,moveTwoType,moveThreeType) => {
    let moveType = {        
        'rock'   : true,
        'paper'  : true,
        'scissors': true        
    }
    return (moveType[moveOneType] && moveType[moveTwoType] && moveType[moveThreeType])
}


const validMoveType=(moveTypeIn) => {
    let a = 1
    let moveType = {        
        'rock'   : true,
        'paper'  : true,
        'scissors': true        
    }
    return moveType[moveTypeIn]
}

const validMoveValueAll =(moveOneValue,moveTwoValue,moveThreeValue) => {
    if (isNaN(moveOneValue) || isNaN(moveTwoValue) || isNaN(moveThreeValue) ||
        moveOneValue + moveTwoValue + moveThreeValue > 99 || 
        moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99 ||
        moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1        
    ) return false
    return true
}

const validMoveValue = (moveValue) => {
    if (isNaN(moveValue) || moveValue > 99 || moveValue < 1) return false
    return true
}

const getRoundWinner = (roundNumber) => {
    if ((!Number.isInteger(roundNumber) || !(roundNumber > 0))) return null
    switch (roundNumber) {
        case 1 : if(!validMoveType(playerOneMoveOneType))   return null
                 if(!validMoveValue(playerOneMoveOneValue)) return null
                 if(!validMoveType(playerTwoMoveOneType))   return null
                 if(!validMoveValue(playerTwoMoveOneValue)) return null
                 break
        case 2 : if(!validMoveType(playerOneMoveTwoType))   return null
                 if(!validMoveValue(playerOneMoveTwoValue)) return null
                 if(!validMoveType(playerTwoMoveTwoType))   return null
                 if(!validMoveValue(playerTwoMoveTwoValue)) return null                 
                 break
        case 3 : if(!validMoveType(playerOneMoveThreeType))   return null
                 if(!validMoveValue(playerOneMoveThreeValue)) return null
                 if(!validMoveType(playerTwoMoveThreeType))   return null
                 if(!validMoveValue(playerTwoMoveThreeValue)) return null
                 break
        default: return null    
    }    
    const playerOneInt = convertChoiceToInt(getPlayerChoice('Player One',roundNumber))
    const playerTwoInt = convertChoiceToInt(getPlayerChoice('Player Two',roundNumber))
   
    //This will give 1 if player wins, 2 if computer wins, 0 for a tie
    let winner = (3 + playerOneInt - playerTwoInt) % 3
    
    if (winner === 0) 
        winner = comparePlayerValue(roundNumber)
    
    let won = ({
        0: 'Tie',
        1: 'Player One',
        2: 'Player Two'
    })[winner] ?? `Bad Data :: winner = ${winner}` 

    switch(won) {
        case 'Player One': playerOneWins++
        break
        case 'Player Two': playerTwoWins++
        break
        case 'Tie': ties++
        break
        default: return null
    }
    return won
}

//should be called playGame or Game Loop or something stupid test
const getGameWinner = () => {
    //this is stupid test makes me play rounds here and zero out score from previous test
    playerOneWins = 0
    playerTwoWins = 0
    ties = 0 
    if (getRoundWinner(1) === null) return null
    if (getRoundWinner(2) === null) return null
    if (getRoundWinner(3) === null) return null    
    if (playerOneWins > playerTwoWins) return 'Player One'
    if (playerTwoWins > playerOneWins) return 'Player Two'
    return 'Tie'
}


const comparePlayerValue = (roundNumber) => {
    let playerOneRoundValue = null
    let playerTwoRoundValue = null    
    switch(roundNumber) {         
        case 1 : playerOneRoundValue = playerOneMoveOneValue
                 playerTwoRoundValue = playerTwoMoveOneValue                
                 break
        case 2 : playerOneRoundValue = playerOneMoveTwoValue
                 playerTwoRoundValue = playerTwoMoveTwoValue                 
                 break
        case 3 : playerOneRoundValue = playerOneMoveThreeValue
                 playerTwoRoundValue = playerTwoMoveThreeValue
                 break
        default: return null    
    }
    if (playerOneRoundValue === playerTwoRoundValue) return 0
    else return (playerOneRoundValue > playerTwoRoundValue) ? 1 : 2
    return
}

const getPlayerChoice = (player,roundNumber) => {
    if (player === 'Player One') {
        switch (roundNumber) {
            case 1 : return playerOneMoveOneType
            case 2 : return playerOneMoveTwoType
            case 3 : return playerOneMoveThreeType
            default : return
        }
    }
    else if (player === 'Player Two') {
        switch (roundNumber) {
            case 1 : return playerTwoMoveOneType
            case 2 : return playerTwoMoveTwoType
            case 3 : return playerTwoMoveThreeType
            default : return
        }
    }
    else {        
        return
    }
}

const convertChoiceToInt = (choice) => {
    return ({        
        'rock'   : 0,
        'paper'  : 1,
        'scissors': 2
    })[choice] ?? `Bad Data :: winner = ${choice}`
}

const getRandomType = (number = 3) => {
    const randNum = Math.floor(Math.random() * number)    
    return ({
        0: 'rock',
        1: 'paper',
        2: 'scissors'        
    })[randNum] ?? `Bad Data :: randNum = ${randNum}`
}

const getRandomValue = (number = 100) => {
    const randNum = Math.floor(Math.random() * number)    
}
