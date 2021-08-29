function thingOne(element){
    element.style='color: blue;'
    element.innerHTML = "You're hovering over me."
}

function thingTwo(moose){
    moose.style='color: green;'
    moose.innerHTML = "You're not hovering over me."
}

let clicks = 0
function addClicks(){
    clicks++
    document.getElementById("clicks").innerHTML = clicks
}

function keyDown(element){
    element.style='color: blue;'
}

function keyUp(element){
    element.style='color: green;'
}

let lightOn = false
function flipSwitch(element){
    if(lightOn){
        lightOn = false
        element.innerHTML = "Off"
        document.getElementById("bulb").src = "images/bulboff.png"
    } else {
        lightOn = true
        element.innerHTML = "On"
        document.getElementById("bulb").src = "images/bulbon.jpeg"
    }
}