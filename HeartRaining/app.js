let body=document.body
let heart="💜"

function createHeart(){
    let div=document.createElement('div')
    div.classList.add('heart')
    div.innerText=heart
    div.style.left=`${Math.random() * 100}vw`
    body.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000);
}

setInterval(createHeart, 100);