import firebase from "firebase";


let firebaseConfig = {
    apiKey: "AIzaSyDDoBVaJdGYsYZN-dxmLMke6Oz6LyHyx5o",
    authDomain: "academymantra-24df7.firebaseapp.com",
    projectId: "academymantra-24df7",
    storageBucket: "academymantra-24df7.appspot.com",
    messagingSenderId: "125205416567",
    appId: "1:125205416567:web:1e1c1a3b9103cc49fd1472",
    measurementId: "G-B07377X04R"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;