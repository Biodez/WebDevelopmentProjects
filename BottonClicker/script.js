function logout(element) {
    element.innerHTML = 'Logout';
}

function hideButton(element) {
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

function likeButton(element) {
    alert("Ninja was liked")
}
