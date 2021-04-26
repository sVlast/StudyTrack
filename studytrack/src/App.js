import firebase from './util/firebase';
import Home from "./components/Home.js";
import './App.css';
import 'antd/dist/antd.css';

//Test components
import Basicform from "./components/Basicform";


function App() {
  return (
    <>
      <Home/>
    </>
  );
}

console.log("loging", firebase);

export default App;