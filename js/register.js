let showRegister=document.querySelector(".myRegister");
let showLogin=document.querySelector(".myLogin");
let registerDiv=document.querySelector(".wrap");
let loginDiv=document.querySelector(".big-wrap");
showRegister.addEventListener("click",open);
function open() {
    loginDiv.style.display="block";
    registerDiv.style.display="none";
}
showLogin.addEventListener("click",show);
function show() {
    loginDiv.style.display="none";
    registerDiv.style.display="block";
}

