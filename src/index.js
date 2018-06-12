import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxENJb8ZRshjRqFsdcHo-2T83C-1EYg8I",
    authDomain: "menu-e94f8.firebaseapp.com",
    databaseURL: "https://menu-e94f8.firebaseio.com",
    projectId: "menu-e94f8",
    storageBucket: "",
    messagingSenderId: "691164886655"
  };
  firebase.initializeApp(config);
 

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
