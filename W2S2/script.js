function hello(){
    let sum = addStuff(23,45)
    alert("Hello there you guys " + sum)
    alert(`Hello my sum is ${sum}`)
    console.log("Hi guys", sum)
}

function addStuff(numA, numB){
    return(numA + numB)
}

const jessica = {
    name: "Jessica",
    race: "Elf",
    weapon: "bow",
    power: "negotiation",
}

const davie = {
    name: "Davie",
    race: "Red-Neck",
    weapon: "shotgun",
    power: "immortality",
}

const chad = {
    name: "Chad",
    race: "White Collar",
    weapon: "pen",
    power: "litigation",
}

const grok = {
    name: "Grok",
    race: "Ork",
    weapon: "The last guy's skull.",
    power: "Bull like strength"
}

const rossie = {
    name: "Rossi",
    race: "Moto GP Racer",
    weapon: "Ducati Panigale",
    power: "Reflexes of lightening"
}

const gamePlayers = [jessica, davie, chad, grok, rossie]

const players = document.getElementById("players")

for(let i = 0; i < gamePlayers.length; i++){
    players.innerHTML += (`
    <div class='player'>
        <h2>${gamePlayers[i].name}</h2>
        <p>Race: ${gamePlayers[i].race}</p>
        <p>Weapon: ${gamePlayers[i].weapon}</p>
        <p>Power: ${gamePlayers[i].power}</p>
    </div>
    `)
}

var height = 6
var weight = 150.5
var name = "Aaron"
var faveNumber = "7"
var isHot = false

let mood = "happy"
const PLANET = "Earth"

mood = "Angry"

// returns false
faveNumber === 7

// returns true
faveNumber == 7

let sum = 4 + 6 - 2 / 3 * 4

// Modulus returns 1, remainder is equal to one
let remainder = 7 % 3

if( value % 2 != 0){}

// !=  Not equals !==

// >  <  >=  <=

// DRY Do Not Repeat Yourself