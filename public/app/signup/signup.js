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
const button = document.getElementById('btn');

function signUp() {
    let email = document.getElementById('email');
    let  password = document.getElementById('password');
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value)
        promise.catch(e => alert(e.message));
        location.replace('../account/account.html');
}

button.addEventListener('click',signUp);