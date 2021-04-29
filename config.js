import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzNQgHqhv2l69cr9Q6nzG-pRJpKbe8bsE",
    authDomain: "wireless-buzzer-ec01e.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-ec01e-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-ec01e",
    storageBucket: "wireless-buzzer-ec01e.appspot.com",
    messagingSenderId: "703781652989",
    appId: "1:703781652989:web:cad73b8ed2c6516085b194",
    measurementId: "G-7Y0XDK26FG"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase.database()