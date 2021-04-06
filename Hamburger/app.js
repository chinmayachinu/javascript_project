const hamburger=document.getElementById("hamburger")
const navbar=document.getElementById("nav")

hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active")
    navbar.classList.toggle("disabled")
})