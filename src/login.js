  
(function(){

    alert('works')


// import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: process.env.apiKey,
    authDomain: "menu-e94f8.firebaseapp.com",
    databaseURL: "https://menu-e94f8.firebaseio.com",
    projectId: "menu-e94f8",
    storageBucket: "",
    messagingSenderId: "691164886655"
  };
  firebase.initializeApp(config);

  

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  
  btnLogin.addEventListener('click', e => {
    //get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    console.log(email)
    console.log(pass)

  });

}());