let btn=document.querySelector('button')
let img=document.querySelector('img')

//getting the class
let btnClass=document.getElementById('modal_btn')
let popupClass=document.getElementById('popup_box')


console.log(btn)
console.log(img)
console.log(btnClass)
console.log(popupClass)

//show popup
function showPopup(){
    popupClass.style.display='flex'
    btnClass.style.display='none'
    document.body.style.backgroundColor='rgba(0,0,0,0.2)'
}

//show button
function showButton(){
    popupClass.style.display='none'
    btnClass.style.display='block'
    document.body.style.backgroundColor='rgba(0,0,0,0)'
}

btn.addEventListener('click',()=>{
    showPopup()
})
img.addEventListener('click',()=>{
    showButton()
})