import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIaIsMNyeWxmJrszFuvWnXymGlhyRTw04",
    authDomain: "seize-decembre-backend.firebaseapp.com",
    databaseURL: "https://seize-decembre-backend-default-rtdb.firebaseio.com",
    projectId: "seize-decembre-backend",
    storageBucket: "seize-decembre-backend.appspot.com",
    messagingSenderId: "673244485170",
    appId: "1:673244485170:web:2589c1859c7abdf50ace2b",
    measurementId: "G-EYB974JGYJ"
  };
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore(); // Initialisez Firestore et exportez-le

export { firebase, database };