// All code should be written in this file.
//Player One todo probably should be object with values not this but going by the instructions
const playerOneMoveOneType = ''
const playerOneMoveTwoType = ''
const playerOneMoveThreeType = ''
const playerOneMoveOneValue = ''
const playerOneMoveTwoValue = ''
const playerOneMoveThreeValue = ''
//Player Two 
const playerTwoMoveOneType = ''
const playerTwoMoveTwoType = ''
const playerTwoMoveThreeType = ''
const playerTwoMoveOneValue = ''
const playerTwoMoveTwoValue = ''
const playerTwoMoveThreeValue = ''

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType,moveTwoValue, moveThreeType, moveThreeValue) => {
    if (player === 'Player One') {
        playerOneMoveOneType =  moveOneType 
        playerOneMoveTwoType = moveTwoType
        playerOneMoveThreeType = moveThreeType
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeValue = moveThreeValue
    }
    else if (player = 'Player Two') {
        playerTwoMoveOneType = moveOneType 
        playerTwoMoveTwoType = moveTwoType
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveOneValue = moveOneValue
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeValue = moveThreeValue 
    }
    else {
        console.log(`player not found player = ${player}`)
    }        
}

const getRoundWinner = (roundNumber) => {
    const playerOneInt = convertChoiceToInt(getPlayerChoice('Player One',roundNumber))
    const playerTwoInt = convertChoiceToInt(getPlayerChoice('Player Two',roundNumber))
    //This will give 1 if player wins, 2 if computer wins, 0 for a tie
    const winner = (3 + playerOneInt - playerTwoInt) % 3
    if (winner === 0) 
        winner = comparePlayerValue(roundNumber)
    return  ({
        0: 'Tie',
        1: 'Player One',
        2: 'Player Two'
    })[winner] ?? `Bad Data :: winner = ${winner}` 
}

const comparePlayerValue = (roundNumber) => {
    const playerOneRoundValue = null
    const playerTwoRoundValue = null
    switch (roundNumber) {
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
    return  null
}

const getPlayerChoice = (player,roundNumber) => {
    if (player === 'Player One') {
        switch (roundNumber) {
            case 1 : return playerOneMoveOneType
            case 2 : return playerOneMoveTwoType
            case 3 : return playerOneMoveThreeType
            default : return null
        }
    }
    else if (player === 'Player Two') {
        switch (roundNumber) {
            case 1 : return playerTwoMoveOneType
            case 2 : return playerTwoMoveTwoType
            case 3 : return playerTwoMoveThreeType
            default : return null
        }
    }
    else {
        console.log(`Invalid player : player = ${player}`)
        return null
    }
}

const convertChoiceToInt = (choice) => {
    return ({        
        'rock'   : 0,
        'paper'  : 1,
        'sissors': 2
    })[choice] ?? `Bad Data :: winner = ${choice}`
}

const getRandomType = (number = 3) => {
    const randNum = Math.floor(Math.random() * number)    
    return ({
        0: 'rock',
        1: 'paper',
        2: 'sissors'        
    })[randNum] ?? `Bad Data :: randNum = ${randNum}`
}

const getRandomValue = (number = 100) => {
    const randNum = Math.floor(Math.random() * number)    
}