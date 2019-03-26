import { question } from 'readline-sync'

function displayBoard(array)
{
    let i = 0
    
    console.log(array[i] + ' | ' + array[i+1] + ' | ' + array[i+2])
    console.log('--| --| --')
    console.log(array[i+3] + ' | ' + array[i+4] + ' | ' + array[i+5])
    console.log('--| --| --')
    console.log(array[i+6] + ' | ' + array[i+7] + ' | ' + array[i+8]) 
}

function updateBoard(array, position, symbol)
{
    array[position - 1] = symbol
    return array
}

function validateInput(array, position)
{
    if (position != 0 && position-1 in array){
        if (array[position - 1] === 'O' || array[position - 1] === 'X'){
            return false
        }
        else{
            return true
        }
    }
    else{
        return false
    }
    
}

function checkWinner(array, symbol)
{
    if ((array[0] === symbol && array[1] === symbol && array[2] === symbol) ||
        (array[3] === symbol && array[4] === symbol && array[5] === symbol) ||
        (array[6] === symbol && array[7] === symbol && array[8] === symbol) ||
        (array[0] === symbol && array[3] === symbol && array[6] === symbol) ||
        (array[1] === symbol && array[4] === symbol && array[7] === symbol) ||
        (array[2] === symbol && array[5] === symbol && array[8] === symbol) ||
        (array[0] === symbol && array[4] === symbol && array[8] === symbol) ||
        (array[2] === symbol && array[4] === symbol && array[6] === symbol)
    ){
        return true
    }
    else{
        return false
    }
}

const P1 = 'Player 1'
const P2 = 'Player 2'
const P1Symbol = 'O'
const P2Symbol = 'X'
let isP1Win = false
let isP2Win = false
let isP1Turn = true

let arrayBoard = 
['1', '2', '3',
 '4', '5', '6', 
 '7', '8', '9']

console.log('Welcome to Tic Tac Toe game')
console.log('............................')

console.log(P1 + ' : ' + P1Symbol)
console.log(P2 + ' : ' + P2Symbol)
console.log('............................')

let i = 0
while (!isP1Win && !isP2Win && i<9) {
    let currentPlayer = isP1Turn ? P1 : P2
    let currentPlayerSymbol = isP1Turn ? P1Symbol : P2Symbol
    
    displayBoard(arrayBoard)

    console.log('............................')

    console.log(currentPlayer + "'s turn")
    
    let ansPosition = question('Select position index\n')

    if (validateInput(arrayBoard, ansPosition)){
        arrayBoard = updateBoard(arrayBoard, ansPosition, currentPlayerSymbol)

        console.log('............................')
        
        if (currentPlayerSymbol === P1Symbol){
            isP1Win = checkWinner(arrayBoard, currentPlayerSymbol)
        }
        else{
            isP2Win = checkWinner(arrayBoard, currentPlayerSymbol)
        }       
        i += 1
        isP1Turn = !isP1Turn
    }
    else{
        console.log("Invalid position index, please select again\n")
    }
}

displayBoard(arrayBoard)
console.log('............................')

if (isP1Win)
{
    console.log('Congratulation! ' + P1 + ' WON!')
}
else if (isP2Win)
{
    console.log('Congratulation! ' + P2 + ' WON!')
}
else
{
    console.log('It is a DRAW!')
}


 