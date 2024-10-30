const btnEls=document.querySelectorAll("button");
const input=document.getElementById("result");
for(let i=0;i<btnEls.length;i++){
    btnEls[i].addEventListener("click",()=>{
       
        const btnVal=btnEls[i].innerText;
        if(btnVal=='C'){
            clearResult();
        }else if(btnVal=='='){
            calEqual();
        }else{
            appendValue(btnVal);
        }
    })
}
function clearResult(){
    input.value="";
}
function calEqual(){
    input.value=eval(input.value);
}
function appendValue(btnVal){
    input.value+=btnVal;
}