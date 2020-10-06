let myFirstname=document.querySelector("#fname");
let myLastname=document.querySelector("#lname");
let showFname=document.querySelector(".fnameshow");
let showLname=document.querySelector(".lnameshow");
let myBtn=document.querySelector(".btn");
myBtn.addEventListener("click", perform)
function perform(e) {
    e.preventDefault();
    if (myFirstname.value=="") {
        showFname.innerHTML="this field is required";  
        return; 
    }
    else if (myFirstname.value!="") {
        showFname.style.display="none"; 
        return;   
    }
    
}
myFirstname.addEventListener("keyup", shade)
function shade() {
    showFname.style.display = "none"; 
    
}
myBtn.addEventListener("click", more)
function more(e) {
    e.preventDefault();
    if (myLastname.value=="") {
        showLname.innerHTML="this field is required";  
        return; 
    }
    else if (myLastname.value!="") {
        showLname.style.display="none"; 
        return;   
    }
    
}
myLastname.addEventListener("keyup", sip)
function sip() {
    showLname.style.display = "none"; 
    
}