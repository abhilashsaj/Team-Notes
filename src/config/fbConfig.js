import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD0jDLlBrT8UnmJMv1ipf_nVvnb40f1xdM",
    authDomain: "note-app-b3546.firebaseapp.com",
    databaseURL: "https://note-app-b3546.firebaseio.com",
    projectId: "note-app-b3546",
    storageBucket: "note-app-b3546.appspot.com",
    messagingSenderId: "1007930775011",
    appId: "1:1007930775011:web:dda5a7693321208219bcd6",
    measurementId: "G-GC3J1LQ4T1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;