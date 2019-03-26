import { question } from 'readline-sync'

function displayPokemon(option){
    let i = 0
    while(i < 3){
        console.log (i + '. ' + option[i].name + ' : ' + option[i].value + ' HP')
        i += 1
    }
}

function displayDamage(option){
    let i = 0
    while(i < 3){
        console.log (i + '. ' + option[i].name + ' : ' + option[i].value + ' damage')
        i += 1
    }
}

//const myPokemon = "Charmander"
let myPokemon : string
const opponent = "Mr. Mime"
let myHP : number
let oppHP = 200
let isMyTurn = true

const pokemon = [
    {name: 'Charmander', value: 300},
    {name: 'Mr. Mime', value: 200},
    {name: 'Pidgey', value: 100}
]

const move = [
    {name: 'Shadow Ball', value: 50},
    {name: 'Tackle', value: 5},
    {name: 'Hyper Beak', value: 150},
    {name: 'Body Slam', value: 75}
]

// 1. You have encounter your opponent Mr Mine.
console.log('You have encountered a wild ' + opponent)
// 2. You send in Gengar.
console.log("Your available pokemon")
displayPokemon(pokemon)
let myPokemonIndex = question('Select pokemon index\n')

console.log('-------------------------------')

myPokemon = pokemon[myPokemonIndex].name
myHP = pokemon[myPokemonIndex].value
console.log('You send out ' + myPokemon)
// TODO: 3. You can choose one of Gengar's skills
// how much HP each pokemon has
console.log(myPokemon + " has " + myHP + " HP")
console.log(opponent + " has " + oppHP + " HP")
// 3. Gengar use shadow ball. Shadow Ball hits for 50 DMG.

// the game continues while either pokemon has more than 0 hp
while(myHP > 0 && oppHP > 0) {
    console.log("---------------------------")
    let attackerName = isMyTurn ? myPokemon : opponent
    let defenderName = isMyTurn ? opponent : myPokemon
    let oppAttackDamage = 50

    if (isMyTurn) {
        console.log("Your available move")
        displayDamage(move)
        let myPokemonMoveIndex = question('Select move index\n')

        console.log('-------------------------------')

        let myPokemonMove = move[myPokemonMoveIndex].name
        let myPokemonMoveDamage = move[myPokemonMoveIndex].value
        console.log(attackerName + " uses " + myPokemonMove)
        console.log(myPokemonMove + " hits for " + myPokemonMoveDamage + " damage")
        oppHP = oppHP - myPokemonMoveDamage
        console.log(defenderName + "'s health is reduced to " + oppHP)
    } else {
        console.log(attackerName + " uses Shadow Ball")
        console.log("Shadow Ball hits for " + oppAttackDamage + " damage")
        myHP = myHP - oppAttackDamage
        console.log(defenderName + "'s health is reduced to " + myHP)
    }

    isMyTurn = !isMyTurn
}
console.log('-------------------------------')

if (oppHP <= 0) {
    console.log(opponent + " faints")
    // 5. You have earned experience points.
    console.log(myPokemon + " has gained 50 exp")
    // TODO: 6. if your pokemon levels up, might learn new skills.
} else {
    console.log(myPokemon + " faints")
    // 5. You have earned experience points.
    console.log("GAME OVER")
}
