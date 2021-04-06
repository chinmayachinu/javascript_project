let body=document.body
let text='❤This Is Chinmaya Kumar Panigrahi❤'
let count=0

function showText(){
    if(count==text.length){
        count=0;
        body.innerHTML=''
    } 
    body.append(text.slice(count,count+1))
    count++
}

setInterval(showText,100)