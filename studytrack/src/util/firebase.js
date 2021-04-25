import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVxLv_Oc-RXVgRItyChPGTX8oRsKM_bQc",
  authDomain: "studytrack-ae509.firebaseapp.com",
  databaseURL: "https://studytrack-ae509-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studytrack-ae509",
  storageBucket: "studytrack-ae509.appspot.com",
  messagingSenderId: "1021595153306",
  appId: "1:1021595153306:web:47eadfdf0610b7856e8023",
  measurementId: "G-E1WG61Q7VP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;