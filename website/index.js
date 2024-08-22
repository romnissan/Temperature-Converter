const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;


function convert(){
    if(textBox.value==""){
        result.textContent = "Enter a number first";
    }
    else if(toF.checked){
        temp = textBox.value*1.8+32;
        result.textContent = temp+"゜F";
    }
    else if(toC.checked){
        temp = (textBox.value-32)/1.8;
        result.textContent = temp+"゜C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}
