import firebase from 'firebase';

let firebaseConfig = {
    apiKey: 'AIzaSyAQX16_4fxwbL5XR6yaNlV9NRwSUFX9yOU',
    authDomain: 'paktolus-1fdf5.firebaseapp.com',
    projectId: 'paktolus-1fdf5',
    storageBucket: 'paktolus-1fdf5.appspot.com',
    messagingSenderId: '106511065501',
    appId: '1:106511065501:web:81e1afdac3c97257b38f74',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
