const btnContainer= document.querySelector('#tip');
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const reset = document.getElementById('reset');
const $tip = document.querySelector('#tipAmount');
const $total = document.querySelector('#total');
let stateError = false;

for(let i = 0; i < 5; i++){
    btnContainer.children[i].addEventListener('click',calc);
}

custom.addEventListener('click', calc);
reset.addEventListener('click', resetAll);

//funcion principal
function calc(){
    if(bill.value &&  bill.value > 0){
        if(people.value &&  people.value > 0){
            let porcentaje = parseInt(this.value);
            let ticket = parseFloat(bill.value);
            let person = parseInt(people.value);
            const tipAmount = ((ticket * porcentaje) / 100) / person;
            const total = parseFloat((ticket / person) + tipAmount).toFixed(2);
            printHTML(total, parseFloat(tipAmount).toFixed(2));
        }else{
            handleError(people);
        }
    }else{
        handleError(bill);
    }
}


//funciones utils
function handleError(input){
    if (stateError) {        
    } else {
        let parentNode = input.parentNode;
        let label = document.createElement('label');
        label.innerText = 'error';
        label.setAttribute("for",input.getAttribute('name'));
        parentNode.insertBefore(label,input);
        input.style.outlineColor = 'red';
        input.focus();
        input.addEventListener('change', ()=>{
        console.log(parentNode.removeChild(label));
        input.style.outlineColor = "hsl(172, 79%, 46%)";
        stateError = false;
        })
        stateError = true;
    }
    
}

function resetAll(){
    bill.value = "";
    people.value = "";
    custom.value = "";
    bill.focus();
    $total.innerHTML = "$0.00";
    $tip.innerHTML = "$0.00"; 

}
function printHTML(total,tip) {

    $total.innerHTML = `$ ${total}`;
    $tip.innerHTML = `$ ${tip}`;
}
