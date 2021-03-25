const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('btn');
const message = document.querySelector('.em');
const icon = document.getElementById('i');

function checkError(){
    if(inputBox.value == null|| inputBox.value == ""){
        inputBox.classList.add("error");
        inputBox.style.border = "2px solid red"
        icon.style.display = "block";
        message.innerText = "Please enter a valid Your project's Zip Code"
           
    }
}
btn.addEventListener('click',checkError)

const clearStyle =()=>{
    inputBox.classList.remove("error");
    inputBox.style.border = "1px solid #DBDBDB"
    message.innerText = "";
    icon.style.display = "none";
}

inputBox.addEventListener('focus',clearStyle);

const removeIcon = document.getElementById('removeIcon');

const updatedInfo = ()=>{
    if(!inputBox.value == "" || !inputBox.value == null)
    {
    inputBox.style.border = "2px solid green";
    message.style.color = "green";
    message.innerHTML = "Tallahasse, FL";
    }else{
        inputBox.classList.add("error");
        inputBox.style.border = "2px solid red";
        icon.style.display = "block";
        message.style.color = "red"
        message.innerText = "Please enter a valid Your project's Zip Code"
    }
    
}

inputBox.addEventListener('change',updatedInfo);