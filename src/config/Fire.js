import firebase from 'firebase';  

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDxENJb8ZRshjRqFsdcHo-2T83C-1EYg8I",
    authDomain: "menu-e94f8.firebaseapp.com",
    databaseURL: "https://menu-e94f8.firebaseio.com",
    projectId: "menu-e94f8",
    storageBucket: "menu-e94f8.appspot.com",
    messagingSenderId: "691164886655"
  };
const fire = firebase.initializeApp(config);
export default fire;