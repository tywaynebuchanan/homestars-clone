const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const errEmail  = document.getElementById('errEmail')
let isvalidEmail = false, isvalidPass = false;
btn.disabled = true;

email.addEventListener('change',()=>{
   if(email.value == ""){
        errEmail.style.color = "red";
        errEmail.innerText = "is this email valid?";
        email.style.border = "2px solid red"
        isvalidEmail = false
        

   }else{
    errEmail.style.color = "";
    errEmail.innerText = "";
    email.style.border = "2px solid green"
    isvalidEmail = true;
   }
})

password.addEventListener('keydown',()=>{
    if(email.value == ""){
         errPass.style.color = "red";
         errPass.innerText = "is this Pass valid?";
         password.style.border = "2px solid red"
         isvalidPass = false
    }else{
     errPass.style.color = "";
     errPass.innerText = "";
     password.style.border = "2px solid green"
     isvalidPass = true
    }

    if(isvalidPass == true && isvalidPass == true)
    {
        btn.disabled = false;
    }
    
 })

 password.addEventListener('focusout',()=>{
     if(password.value == ""){
         btn.disabled = true;
         password.style.border = "2px solid red";
         errPass.innerText = "Password is required"
     }

 
})

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(isvalidPass == true && isvalidPass == true)
    {
        btn.disabled = false;
    }
})
