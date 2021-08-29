let count = 1;
function likeIncrement() {
    count++;
    let like = document.querySelector("#likes");
    like.innerText = count + " like(s)";
}