var dropMenu = document.getElementById("drop-menu");
var closeMenu = document.getElementById("close");

var contentBody = document.getElementById("mainbody");
var side = document.getElementById("side");

// to handle dropdown content
dropMenu.onclick = () => {
    side.classList.add("showAlwasy");
}

closeMenu.onclick = () => {
    side.classList.remove("showAlwasy");
}