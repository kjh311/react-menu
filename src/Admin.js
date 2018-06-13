import React from "react";
import * as firebase from "firebase";

// Initialize Firebase
// var config = {
//   apiKey: process.env.apiKey,
//   authDomain: "menu-e94f8.firebaseapp.com",
//   databaseURL: "https://menu-e94f8.firebaseio.com",
//   projectId: "menu-e94f8",
//   storageBucket: "",
//   messagingSenderId: "691164886655"
// };
// firebase.initializeApp(config);

function Login() {
  
  // const btnSignup = document.getElementById("btnSignup");
  // const btnLogout = document.getElementById('btnLogout');

  
  

  

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = (
    <button id="btnLogin" className="btn btn-action">
      Login
    </button>
  );

  //Add Login Event
    btnLogin.addEventListener("click", e => {
    //get email and password
    alert('works')
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    console.log(email);
    console.log(pass);
  });


}






export default class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <div>
          <div>
      <input id="txtEmail" type="email" placeholder="Email" />
      <input id="txtPassword" type="password" placeholder="Password" />
      <button id="btnLogin" className="btn btn-action">
        Login
      </button>
      <button id="btnSignup" className="btn btn-secondary btn-success">
        Sign Up
      </button>
      <button id="btnLogout" className="btn btn-action hide">
        Log Out
      </button>
    </div>
          <Login />
        </div>
      </div>
    );
  }
}
