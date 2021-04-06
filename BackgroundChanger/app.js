let body=document.body
let button=document.querySelector('button')

function changeBackground(){
    const randomColor=Math.floor(Math.random()*16777215).toString(16)
    body.style.backgroundColor=`#${randomColor}`
    console.log(randomColor)
}
console.log(button)
button.addEventListener('click' , ()=>{
    changeBackground()
})