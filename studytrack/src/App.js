import firebase from './util/firebase';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//Test components
import Basicform from "./components/Basicform";
import { Button } from 'antd';
//Working components
import Dashboard from './components/Dashboard/Dashboard.js';
import LandingPage from './components/Landing/Landing.js';


//test functions

function handleLogOut()  {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log("User logged out");
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

function handleLogState() {

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
      console.log("User is logged in", uid);
    } else {
      // User is signed out
      // ...
      console.log("User is NOT logged in!");
    }
  })

}

//

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Link to="/dashboard">Link</Link>
          <Button type="primary" onClick={handleLogState}>Check user log state</Button>
          <Button type="primary" onClick={handleLogOut}> Log Out </Button>
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <Link to="/">Link</Link>
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}


export default App;