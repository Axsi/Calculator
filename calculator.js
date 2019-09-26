const input =  document.getElementById('input-result');
let numberCheck = false;
let decimalCheck = false;
let operators = ["+", "-", "*", "/"];

document.querySelector('#calc-container').addEventListener('click', event => {
    if(!isNaN(event.target.value) || (event.target.value === ".")){
        if(input.value === "0"){
            input.value = event.target.value;
        }else{
            if(event.target.value === "."){
                if(decimalCheck === false){
                    input.value += event.target.value;
                    decimalCheck = true;
                }
            }else{
                input.value += event.target.value;
            }
        }
        numberCheck = true;
    }else if(operators.includes(event.target.value)){
        doOperation();
    }else{
        if(event.target.value === "AC"){
            input.value = '0';
        }
        if(event.target.value === "="){
            input.value = eval(input.value);
            decimalCheck = true;
        }
    }
});

function doOperation(){
    if(numberCheck === true){
        input.value += event.target.value;
        numberCheck = false;
        decimalCheck = false;
    }
}
