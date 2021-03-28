const state = document.getElementById('states');
const form = document.getElementById("signupForm");
const lname = document.getElementById('lname');
const fname = document.getElementById('fname');
const address = document.getElementById('address')
const states = document.getElementById('states')
const zipcode = document.getElementById('zipcode');
const btn = document.getElementById('btn-1');

btn.addEventListener('click',()=>{
    window.location.href = 'success.html'
})


// const messages = {
//     "1":"First name is required",
//     "2":"Last name is required",
//     "3":"First line is required",
//     "4":"City is required",
//     "5":"State is required",
//     "6":"Zip is required",
//     "7":""
// }

// // const getStates = async()=>{
// //     const data = await fetch('states.json')
// //     const states = await data.json();

// //    states.forEach(e=>{
// //     const div = document.createElement('option');
// //     let value = `${e.abbreviation}`;
// //     div.innerText = value;
// //     state.appendChild(div);

// //    })

// // }

// // getStates();


// function validateFname(){
//     if(fname.value == ""  || fname.value == null){
//         fname.style.border = "2px solid red";
//         document.getElementById('errFname').innerHTML = messages[1];
//         fname.focus()
//      }else{
//          fname.style.border = "1px solid green";
//          document.getElementById('errFname').innerHTML = messages[7];
        
//      }
     
 
// }

// function validateLname(){
//     if(lname.value == ""  || lname.value == null){
//         lname.style.border = "2px solid red";
//         document.getElementById('errLname').innerHTML = messages[2];
//         lname.focus()
//      }else{
//          lname.style.border = "1px solid green";
//          document.getElementById('errLname').innerHTML = messages[7];
         
//      }
     
 
// }

// function validateAddress(){
//     if(address.value == ""  || address.value == null){
//         address.style.border = "2px solid red";
//         document.getElementById('errAdd').innerHTML = messages[3];
//         address.focus()
//      }else{
//          address.style.border = "1px solid green";
//          document.getElementById('errAdd').innerHTML = messages[7];
//      }
     
// }

// function validateCity(){
//     if(city.value == ""  || city.value == null){
//         city.style.border = "2px solid red";
//         document.getElementById('errCity').innerHTML = messages[4];
//         city.focus()
//      }else{
//          city.style.border = "1px solid green";
//          document.getElementById('errCity').innerHTML = messages[7];
//      }
     
// }

// // function validateState(){
// //     let optionState = states.options[states.selectedIndex].value;
// //     if(optionState == 0){
// //         states.style.border = "2px solid red";
// //         document.getElementById('errState').innerHTML = messages[5];
// //         states.focus()
// //      }else{
// //          states.style.border = "1px solid green";
// //          document.getElementById('errState').innerHTML = messages[7];
        
// //      }
     
// // }

// function validateZip(){
//     if(zipcode.value.length < 5 ){
//         zipcode.style.border = "2px solid red";
//         document.getElementById('errZip').innerHTML = messages[6];
//         zipcode.focus()
       
//     }else{
//         zipcode.style.border = "1px solid green";
//          document.getElementById('errZip').innerHTML = messages[7];
        
//     }
     
// }

// fname.addEventListener('blur',validateFname);
// lname.addEventListener('blur',validateLname);
// address.addEventListener('blur',validateAddress);
// city.addEventListener('blur',validateCity);
// // states.addEventListener('blur',validateState);
// zipcode.addEventListener('blur',validateZip);





