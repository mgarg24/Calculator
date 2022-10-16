
let total = '';
let firstOperand='';
let secondOperand='';
let operator ='';

let display = document.querySelector(".display")


let clear = document.querySelector(".clear");

clear.addEventListener('click', ()=>{

    display.innerHTML = 0;
    firstOperand='';
    secondOperand = '';
    operator ='';
    total='';

});

document.querySelectorAll('#num').forEach(item => {
    item.addEventListener('click', event => {
        
        
        if(total != '' && operator !=''){
            firstOperand =total;
            total =''
            secondOperand = secondOperand +item.textContent;
            display.innerHTML = display.innerHTML + item.textContent;

        }
        
        else if ( operator != '' ){
            secondOperand = secondOperand + item.textContent;
            display.innerHTML = display.innerHTML + item.textContent;
        }

        else {
            firstOperand = firstOperand + item.textContent ;
        display.innerHTML = firstOperand;
        }

        

    });

});

document.querySelectorAll('#operator').forEach(item => {
    item.addEventListener('click', event => {
        
        if (firstOperand != '' && secondOperand === '' && operator ==='') {
        display.innerHTML = display.innerHTML + item.textContent;
        operator = item.textContent;

        
        }
        else if (total !='' && operator ===''){

        display.innerHTML = display.innerHTML + item.textContent;
        operator = item.textContent;}


    });

});

document.querySelector("#equal").addEventListener('click', ()=>{
    
    if (firstOperand != '' && secondOperand != ''){
            
       
        
        if (operator ==='+'){
            total = sum(+firstOperand, +secondOperand);
            display.innerHTML=sum(+firstOperand, +secondOperand);


        }
        else if (operator ==='-'){
            total = minus(+firstOperand, +secondOperand);
            display.innerHTML=minus(+firstOperand, +secondOperand);


        }
        else if (operator ==='x'){
            total = multiply(+firstOperand, +secondOperand);
            display.innerHTML=multiply(+firstOperand, +secondOperand);


        }
        else if (operator ==='÷'){
            total = divide(+firstOperand, +secondOperand);
            display.innerHTML=divide(+firstOperand, +secondOperand);


        }

        firstOperand, secondOperand ='';
        operator = '';
    }

});

document.querySelector(".delete").addEventListener('click', ()=>{
    let str = '';
    let str2 = '';
    if (firstOperand !='' && operator !='' && secondOperand !=''){
        str = secondOperand.slice(0,-1);
        secondOperand =str;
        

        str2 = display.innerHTML.slice(0,-1);
        display.innerHTML = str2;
        
    }
    else if(firstOperand !='' && operator !='' && secondOperand ==='' ){
        operator ='';
        

        str2 = display.innerHTML.slice(0,-1);
        display.innerHTML = str2;

    }
    else if(firstOperand !='' && operator === '' && secondOperand ==='') {

        str = firstOperand.slice(0,-1);
        firstOperand =str;
        
        
        

        if (firstOperand === ''){
            display.innerHTML = '0';
        }
        else{
            str2 = display.innerHTML.slice(0,-1);
            display.innerHTML = str2;
            
        }
    }
    /**if (display.innerHTML != '0'){

        if (display.innerHTML.length ===1){
            display.innerHTML = '0';
        }
        str = display.innerHTML.slice(0,-1);
        display.innerHTML = str;
       
        
    } **/

   
});
let char =''

document.querySelector(".decimal").addEventListener('click', ()=>{

    char =display.innerHTML.charAt(display.innerHTML.length-1);
    

    if(char === '+' || char === '-' || char === 'x' || char === '÷' ) {

        alert("doofus");
    }

});


function sum(a,b){

    return a+b;
    
}
function minus(a,b){
    return a-b;
}

function multiply(a,b){

    return a*b;
}

function divide(a,b){

    if (b===0){

        return "lol";
    }
    return a/b;
}