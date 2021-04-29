import firebase from './util/firebase';
import './App.css';
import 'antd/dist/antd.css';

//Test components
import Basicform from "./components/Basicform";
//Working components
import Dashboard from './components/Dashboard.js';
import LandingPage from './components/Landing.js';


function App() {
  return (
    <>
      <LandingPage/>
      <Dashboard/>
    </>
  );
}

//console.log("loging", firebase);

export default App;