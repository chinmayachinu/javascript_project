console.log("hi")
let actv=document.getElementsByTagName('span');
let index=0;

for(let i=0; i<actv.length;i++){
    actv[i].addEventListener('click' , ()=>{
        for(let j=0; j<actv.length;j++){
            let contain=actv[j].classList.contains('active')
            if(contain){
                index=j;
            }
        }
       actv[index].classList.remove('active')
       actv[i].classList.add('active')

        
    })
}