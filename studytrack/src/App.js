//import ReactDOM from 'react-dom';
//import React, { useState } from 'react';
//import HorizontalLoginForm from "./components/AntForm.js";
import LogInModal from "./components/LogInModal.js";

import firebase from 'firebase/app';
import 'firebase/auth';

import './App.css';
import 'antd/dist/antd.css';
import RegistrationForm from "./components/AntRegForm.js";
//let database = firebase.database();


function App() {
  return (
    <>
      <LogInModal/>
      
    </>
  );
}

console.log(firebase);

export default App;