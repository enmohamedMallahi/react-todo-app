import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA98Mz-WKhN04C6GkhgSRhTchXOQ_zr-q8",
    authDomain: "react-todo-app-616a1.firebaseapp.com",
    projectId: "react-todo-app-616a1",
    storageBucket: "react-todo-app-616a1.appspot.com",
    messagingSenderId: "1056795929096",
    appId: "1:1056795929096:web:ddf16f2cfd402feef8ffbd",
    measurementId: "G-VQDB0S1B6N"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics();