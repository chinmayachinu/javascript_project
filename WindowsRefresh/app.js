let refresh = document.getElementById("refresh")
let container=document.getElementById("container")
var count=0;
refresh.addEventListener('click', () => {
    location.reload()
    container.style.display='none'
    console.log("refreshed")
    count=0;
})

function mouseClicked(event) {
    count++
    if(event.which === 1 && count===1){
        var x = event.clientX;
        var y = event.clientY;
        console.log("mouse left clicked")
        console.log(x +" " + y)
        console.log(event)
        container.style.display='block'
        container.style.left=x+'px'
        container.style.top=y+'px'
    }
}