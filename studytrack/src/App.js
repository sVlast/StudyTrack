import LogInModal from "./components/LogInModal.js";

import firebase from './util/firebase';
import 'firebase/auth';

import './App.css';
import 'antd/dist/antd.css';
import Basicform from "./components/Basicform";


function App() {
  return (
    <>
      <LogInModal />
      <div>
        <h1>test</h1>
        <Basicform />
      </div>
    </>
  );
}

console.log("loging", firebase);

export default App;