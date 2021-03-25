const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('btn');
const message = document.querySelector('.em');
const icon = document.querySelector('.icon');

function checkError(){
    if(inputBox.value == null|| inputBox.value == ""){
        inputBox.classList.add("error");
        icon.style.display = "inline";
        message.innerText = "Please enter a valid Your project's Zip Code"
        
       
        
    }
}
btn.addEventListener('click',checkError)

const clearStyle =()=>{
    inputBox.classList.remove("error");
    message.innerText = "";
   
    icon.style.display = "none";
}

inputBox.addEventListener('focus',clearStyle)