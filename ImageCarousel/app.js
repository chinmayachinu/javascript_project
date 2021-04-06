let imgs=document.querySelectorAll('img')
let carauselId=document.getElementById('carousel')
console.log(carauselId)
console.log(imgs)

let count=0
let translateValue=400;

function carausel(){
    console.log('hi')
    count++
    if(count==imgs.length){
        count=0;
    }
    carauselId.style.transform=`translateX(${-translateValue*count}px)`
}
setInterval(carausel, 1000);
