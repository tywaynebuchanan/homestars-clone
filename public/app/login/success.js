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

const btn = document.getElementById('btn');
const displayUser = document.getElementById('user');

auth.onAuthStateChanged(function(user) {
    if (user) {
        alert('User logged in')
    } else {
        alert("user not logged in")
    }
  });

//   let user = auth.currentUser;

//   if (user) {
    
//   } else {
//     displayUser.innerHTML = "No user logged in";
//   }

const signOut = ()=>{
    auth.signOut();
    window.location.href = "../../index.html";
}

btn.addEventListener('click',signOut)