let acceptCookie = document.getElementById("accept")

acceptCookie.addEventListener('click', function(){
    document.getElementById("cookie-nav").style.display = 'none'
})

function tempConvert(element) {
    let values = document.querySelectorAll(".tempConvert")
    console.log(element.value)
    if(element.value === 'farenheit') {
        for (let i = 0; i < values.length; i++) {
            let ctoFahr = (values[i].innerText * 9 / 5 + 32);
            values[i].innerText = ctoFahr;
        }
    } else if (element.value === 'celcius') {
        for (let i = 0; i < values.length; i++) {
            let farToC = Math.floor((values[i].innerText - 32) * 5 / 9)
            values[i].innerText = farToC
        }
    }
}