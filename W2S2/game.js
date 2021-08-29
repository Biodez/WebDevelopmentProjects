let playerOneScore = 0
let playerTwoScore = 0
let currentMotorcycle = 0

let playerOne = document.getElementById("player-one-score")
let playerTwo = document.getElementById("player-two-score")

const bikes = document.getElementById("bikes")

// playerOne.innerHTML = playerOneScore
// playerTwo.innerHTML = playerTwoScore

const motorcycles = [
    { name: "Ducati Hypermotard 950 RVE", price: 14395, img: "images/hypermotard.jpeg" },
    { name: "Ducati Monster", price: 11995, img: "images/monster.jpeg" },
    { name: "Ducati Streetfighter V4", price: 19995, img: "images/streetfighter.jpeg" },
    { name: "Yamaha Tenere 700", price: 9999, img: "images/tenere700.jpg" },
    { name: "Yamaha R7", price: 8999, img: "images/r7.jpeg" },
    { name: "Honda Africa Twin", price: 143999, img: "images/africatwin.jpeg" },
    { name: "Honda CRF300L Ralley", price: 5999, img: "images/crf300l.jpeg" },
    { name: "Honda Monkey", price: 4199, img: "images/monkey.jpeg" },
    { name: "Honda Super Cub C125", Price: 3749, img: "images/supercub.jpeg" },
    { name: "KTM 690 SMC R", price: 11999, img: "images/ktm690smc.jpeg" },
    { name: "KTM Adventure 890", price: 13099, img: "images/ktm890adventure.jpeg" },
]

bikes.innerHTML = (`
    <h2>${motorcycles[currentMotorcycle].name}</h2>
    <img src="${motorcycles[currentMotorcycle].img}" class="bike-img">
`)

function win(player) {
    alert(`${player} wins!!!`)
    playerOneScore = 0
    playerTwoScore = 0
    playerOne.innerHTML = playerOneScore
    playerTwo.innerHTML = playerTwoScore
}

document.getElementById("guess").addEventListener("click", function (event) {
    event.preventDefault()
    let answer1 = document.forms["guesses"]["playerOneGuess"].value
    let answer2 = document.forms["guesses"]["playerTwoGuess"].value
    if (answer1 != answer2) {
        if (answer1 < motorcycles[currentMotorcycle].price && answer2 < motorcycles[currentMotorcycle].price) {
            if (answer1 > answer2) {
                playerOneScore++
            } else {
                playerTwoScore++
            }
        } else if (answer1 < motorcycles[currentMotorcycle].price) {
            playerOneScore++
        } else if (answer2 < motorcycles[currentMotorcycle].price) {
            playerTwoScore++
        }
    }
    if (currentMotorcycle + 1 < motorcycles.length) {
        currentMotorcycle++
    } else {
        currentMotorcycle = 0
    }
    playerOne.innerHTML = playerOneScore
    playerTwo.innerHTML = playerTwoScore

    if (playerOneScore == 5) {
        win("Player 1")
    } else if (playerTwoScore == 5) {
        win("Player 2")
    }

    document.forms["guesses"]["playerOneGuess"].value = ""
    document.forms["guesses"]["playerTwoGuess"].value = ""

    bikes.innerHTML = (`
        <h2>${motorcycles[currentMotorcycle].name}</h2>
        <img src="${motorcycles[currentMotorcycle].img}" class="bike-img">
    `)
})

