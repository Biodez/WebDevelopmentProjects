console.log("page loaded...");

var vid = document.getElementById("video")
vid.muted = true

function play(element) {
    element.play()
}

function pause(element) {
    element.pause()
}