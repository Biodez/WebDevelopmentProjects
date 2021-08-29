function turnRed(element){
    element.style='color: red;'
}

function turnBlue(element){
    element.style="color: blue;"
}

let count = 0
function counter(){
    // count += 1
    count++
    document.getElementById("counts").innerHTML = count
    // let counter = document.getElementById("counts")
    // counter.innerHTML = count
}

// if(isLightOn){}
// if(isLightOn == true){}

let isLightOn = false
function lightSwitch(element) {
    if (isLightOn) {
        // If true then do something right here.
        isLightOn = false
        element.innerHTML="off"
        document.getElementById("lightBulb").src = "images/bulboff.png"

    } else {
        isLightOn =true
        element.innerHTML="on"
        document.getElementById("lightBulb").src = "images/bulbon.jpeg"
    }
    // !isLightOn  <---- this line could be used instead of the isLightOn = true or false
    console.log(isLightOn)
}


let j = 3
//  value of j becomes 3

j == 3
// is true

j == "3"
// is true

j === 3
// is true

j === "3"
// is false

j != 3
// is false

j !== "3"
// true