let firebaseConfig = {
    apiKey: "AIzaSyC4YlSa44tY9NbB7b2FSYOyfKUwOiGAA5A",
    authDomain: "rubi-ba56e.firebaseapp.com",
    projectId: "rubi-ba56e",
    storageBucket: "rubi-ba56e.appspot.com",
    messagingSenderId: "918738900993",
    appId: "1:918738900993:web:bea5678feb2ebf62838800",
    measurementId: "G-DLNEZERL6X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth = firebase.auth();
// const form = document.getElementById('signupForm');
const password = document.getElementById('password');
// const email = document.getElementById('email');
// const btn = document.getElementById('btn');
const errEmail  = document.getElementById('errEmail')
// let isvalidEmail = false, isvalidPass = false;
// btn.disabled = true;

// email.addEventListener('blur',()=>{
//    if(email.value == ""){
//         errEmail.style.color = "red";
//         errEmail.innerText = "is this email valid?";
//         email.style.border = "2px solid red"
//         email.focus()
//         isvalidEmail = false
//       }else{
//     errEmail.style.color = "";
//     errEmail.innerText = "";
//     email.style.border = "2px solid green"
//     isvalidEmail = true;
//    }
// })

// password.addEventListener('blur',()=>{
//     if(email.value == ""){
//          errPass.style.color = "red";
//          errPass.innerText = "is this Pass valid?";
//          password.style.border = "2px solid red"
//          isvalidPass = false
//          password.focus()
//     }else{
//      errPass.style.color = "";
//      errPass.innerText = "";
//      password.style.border = "2px solid green"
//      isvalidPass = true
//     }

//     // if(isvalidPass == true && isvalidPass == true)
//     // {
//     //     btn.disabled = false;
//     // }
    
//  })

// //  password.addEventListener('focusout',()=>{
// //      if(password.value == ""){
// //          btn.disabled = true;
// //          password.style.border = "2px solid red";
// //          errPass.innerText = "Password is required"
// //      }

 
// // })



// // const showMessage = () =>{
// //     const div = document.createElement('div');
// //     div.innerHTML = "Thank"
// //     div.classList.add('toast','toast--visible');
// //     document.body.appendChild(div);
// //     setTimeout(()=>{
// //       div.classList.remove('toast--visible')
// //     },3000);
// //   }

function signIn() {
    let email = "tywayne@gmail.com";
    let  password = "jamaica1";
    const promise = auth.signInWithEmailAndPassword(email,password)
        promise.catch(e => alert(e.message));
        // alert('Signed in!')
        window.location.href='success.html';
}

btn.addEventListener('click',signIn);
