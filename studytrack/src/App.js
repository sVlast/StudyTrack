import LogInModal from "./components/LogInModal.js";

import firebase from './util/firebase';
import 'firebase/auth';

import './App.css';
import 'antd/dist/antd.css';
import Basicform from "./components/Basicform";
import RegistrationForm from "./components/AntRegForm.js";
import RegisterModal from "./components/RegisterModal.js";
//let database = firebase.database();


function App() {
  return (
    <>
      <LogInModal/>
      <RegisterModal/>
    </>
  );
}

console.log("loging", firebase);

export default App;