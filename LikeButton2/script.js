var elems = document.getElementsByClassName("btn");
for (var i = 0; i < elems.length; i++) {
    let count = 1;
    elems[i].addEventListener('click', function(){
    count++;
    this.parentElement.getElementsByClassName('likes')[0].innerText = count + " like(s)";
})
}