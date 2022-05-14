import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyC7Xhaf8PvF2LzEfh2Eq460-4HetgALCo4",
    authDomain: "react-slack-clone-bf8f6.firebaseapp.com",
    projectId: "react-slack-clone-bf8f6",
    storageBucket: "react-slack-clone-bf8f6.appspot.com",
    messagingSenderId: "970184159828",
    appId: "1:970184159828:web:fa3d6f8b0fae1c5e6d33c1",
    measurementId: "G-2R8V76ZZ5Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;