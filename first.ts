const myPokemon = "Charmander"
const opponent = "Mr.Mime"
let myHP = 300
let oppHP = 200
let isMyTurn = true

// 1. You have encounter your opponent Mr Mine.
console.log('You have encountered a wild ' + opponent)
// 2. You send in Gengar.
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
    let attackDamage = isMyTurn ? 30 : 50

    console.log(attackerName + " uses Shadow Ball")
    console.log("Shadow Ball hits for " + attackDamage + " damage")
    
    if (isMyTurn) {
        oppHP = oppHP - attackDamage
        console.log(defenderName + "'s health is reduced to " + oppHP)
    } else {
        myHP = myHP - attackDamage
        console.log(defenderName + "'s health is reduced to " + myHP)
    }
    
    isMyTurn = !isMyTurn
}

console.log("-------------------------------")

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
