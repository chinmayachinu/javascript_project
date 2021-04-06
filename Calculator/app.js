let inputField=document.querySelector('input')
let allButton=document.querySelectorAll('button')

//global variable to get the current number and previous number
var previousNumber='';
var currentNumber='';
//find the result variable
var total='';

//console.log(inputField.value.length)
//iterate over each button
for(let button of allButton){
    button.addEventListener('click',()=>{
        //if button is AC
        if(button.innerText==='AC'){
            allClearButtonClicked()
        }

        //check the number inputs
        if(button.innerText==='0' || 
            button.innerText==='1' ||
            button.innerText==='2' ||
            button.innerText==='3' ||
            button.innerText==='4' ||
            button.innerText==='5' ||
            button.innerText==='6' ||
            button.innerText==='7' ||
            button.innerText==='8' ||
            button.innerText==='9'){
            
            createNumber(button.innerText)
        }

        //if any operator is clicked
        if(button.innerText==='%' ||
             button.innerText==='+' ||
             button.innerText==='-' ||
             button.innerText==='÷' ||
             button.innerText==='X'){

            createPreviousNumberWhenOperatorClicked(button.innerText)
        }

        //if = is clicked
        if(button.innerText==='='){
            calculateResult(currentNumber,previousNumber)
        }

        //if . (dot) is clicked
        if(button.innerText==="."){
            whenDotClicked(button.innerText)
        }

        //changing the sign of the number
        if(button.innerText==='(+/-)'){
            toggleTheSignOfTheCurrentNumber()
        }
    })
}

//toggle sign function
function toggleTheSignOfTheCurrentNumber(){
    let val=parseFloat(currentNumber);
    if(val>0){
        currentNumber="-"+currentNumber
    }
    else if (val<0){
        currentNumber=currentNumber.slice(1);
    }
    else{
        return
    }
}

//when dot is clicked function
function whenDotClicked(dot){
    console.log("dot is clicked")
    if(currentNumber==='' || currentNumber.includes('.')){
        return
    }
    currentNumber=currentNumber+"."
}

//all clear function
function allClearButtonClicked(){
    currentNumber='';
    previousNumber='';
    inputField.value='';
    console.log('All data is cleared')
}

//create the number
function createNumber(numValue){
    currentNumber+=numValue;
    inputField.value=currentNumber;
    console.log(currentNumber)
}

//create the previous number with the operator , when clicked
function createPreviousNumberWhenOperatorClicked(operatorValue){
    console.log(`${operatorValue} clicked`)
    if(operatorValue==='X'){
       // console.log('current num = '+ currentNumber)
        previousNumber=currentNumber+"*";
        currentNumber='';
        inputField.value=''
    }
    else if(operatorValue==='÷'){
        previousNumber=currentNumber+'/';
        currentNumber='';
        inputField.value='';
    }
    else{
        previousNumber=currentNumber+operatorValue;
        currentNumber='';
        inputField.value='';
    }
}

//get the final result 
function calculateResult(cNum,pNum){
    total=eval((pNum+cNum));
    inputField.value=total;
    //console.log(`previous value = ${previousNumber} current value = ${currentNumber}`)
    currentNumber=total;
    //console.log(currentNumber)
    //console.log(eval(total));
}

//format the inputed number

//calculation by taking the current number and saving the previous number

//(+/-) button clicked
//changeTheSign()
//we can use the operator if we have the length of the input or display field is 1 and that is also an operand 
 //checkIfOperator()
// console.log(button.innerText)
//inputField.value=button.innerText;
//console.log(inputField.value.length)