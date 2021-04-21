//import ReactDOM from 'react-dom';
//import React, { useState } from 'react';
//import HorizontalLoginForm from "./components/AntForm.js";

import firebase from 'firebase/app';
import 'firebase/auth';

import './App.css';
import 'antd/dist/antd.css';
let database = firebase.database();


import LogInModal from "./components/LogInModal.js";

function App() {
  return (
    <>
      <LogInModal/>
      <img src="/images/Miki.gif"></img>
    </>
  );
}

console.log(firebase);

export default App;