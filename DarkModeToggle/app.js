let checkbox=document.getElementById('checkbox');
let para=document.getElementsByTagName('p')
let h1=document.getElementsByTagName('h1')
let body=document.body
console.log(checkbox)

checkbox.addEventListener('change' , (e)=>{
    if(e.target.checked){
        console.log('checked')
        blackBackground()
    }
    else{
        console.log('unchecked')
        whiteBackground()
    }
})

function whiteBackground(){
    body.style.transition='.5s'
    body.style.backgroundColor='white'
    h1[0].style.color='black'
    para[0].style.color='black'
}
function blackBackground(){
    body.style.transition='.5s'
    body.style.backgroundColor='black'
    h1[0].style.color='white'
    para[0].style.color='white'
}