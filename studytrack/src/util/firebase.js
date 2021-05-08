import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // console.log(auth);
    // console.log(auth.currentUser);
    // console.log(user.uid);
    // console.log(auth.currentUser.uid);
  } else {
    // No user is signed in.
  }
});



export default app;