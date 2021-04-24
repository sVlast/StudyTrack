import firebase from './util/firebase';

import LogInModal from "./components/LogInModal.js";
import RegistrationForm from "./components/AntRegForm.js";
import RegisterModal from "./components/RegisterModal.js";

import './App.css';
import 'antd/dist/antd.css';

//Test components
import Basicform from "./components/Basicform";


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