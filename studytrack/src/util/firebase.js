import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVxLv_Oc-RXVgRItyChPGTX8oRsKM_bQc",
  authDomain: "studytrack-ae509-default-rtdb.europe-west1.firebasedatabase.app", 
  projectId: "studytrack-ae509",
  storageBucket: "studytrack-ae509.appspot.com",
  messagingSenderId: "1021595153306",
  appId: "1:1021595153306:web:47eadfdf0610b7856e8023",
  measurementId: "G-E1WG61Q7VP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("firebaseconfig",firebaseConfig);

export default firebase;