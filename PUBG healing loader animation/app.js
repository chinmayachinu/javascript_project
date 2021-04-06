let countTime=document.querySelector('span')
let active= document.getElementById('active')
let btnStart=document.getElementsByClassName('btn-primary')
let btnStop=document.getElementsByClassName('btn-secondary')

var count=6;
var interval

//when start btn is clicked
btnStart[0].addEventListener('click' , ()=>{
    active.classList.add('active')
    interval =setInterval(counter,100)
})
//when stop btn is clicked
btnStop[0].addEventListener('click' , ()=>{
    cancel()
})

//function that decrease the counter 
function counter(){
    count =count-0.1;
    count= Math.round(count * 10) / 10
    console.log(count)
    countTime.innerText=count
    if(count==0){
        cancel()
    }
}

//function for cancel of the animation and the timer
function cancel(){
    active.classList.remove('active')
    countTime.innerText=''
    clearInterval(interval)
    count=6
}

