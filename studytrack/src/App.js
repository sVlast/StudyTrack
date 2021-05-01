import firebase from './util/firebase';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//Test components
import Basicform from "./components/Basicform";
//Working components
import Dashboard from './components/Dashboard/Dashboard.js';
import LandingPage from './components/Landing/Landing.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/Dashboard">Link</Link>
          <LandingPage />
        </Route>
        <Route path="/Dashboard">
          {/*
          test route
          */}
          <Link to="/">Link</Link>
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}

//console.log("loging", firebase);

export default App;