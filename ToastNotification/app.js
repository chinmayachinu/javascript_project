let toast_container=document.getElementsByClassName('toast_container')
let button=document.querySelector('button')

button.addEventListener('click' , ()=> {
    addToast();
})

function addToast(){
    let toastDiv=document.createElement('div')
    let paragraph='<p class="toast-para">Hi this is chinmaya</p>'

    toastDiv.className='toast'
    toastDiv.innerHTML=paragraph
    
    console.log(toastDiv)
    toast_container[0].prepend(toastDiv) 
    setInterval(()=>{
        toastDiv.remove()
    },2000)
}
