// Function that hides the join button
function hideButton(element) {
    element.classList.add('hide');
}

// function that alert the user on anything searched
function alertUser() {
    let inputValue = document.getElementById("search").value;
    alert("You are searching for " + inputValue)
}

// function that increases the number of likes when the heart pics is clicked.
let elems = document.getElementsByClassName("like-img");
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', function(){
    let value = this.parentElement.getElementsByClassName('likes')[0].innerHTML;
    let new_value = parseInt(value) + 1;
    this.parentElement.getElementsByClassName("likes")[0].innerHTML = new_value;
})
}