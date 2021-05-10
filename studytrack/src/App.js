import firebase from "./util/firebase";
import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//Test components
import Basicform from "./components/Basicform";
import FunctionContext from "./FunctionContext";
import { Button } from "antd";
import useContext from "react";
import { ThemeProvider } from "./ThemeContext.js";
//Working components
import Dashboard from "./components/Dashboard/Dashboard.js";
import LandingPage from "./components/Landing/Landing.js";
import DatabaseProvider from "./contexts/DatabaseContext.js";

//test functions

//

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {/* <Link to="/dashboard">Link</Link> */}
                    <LandingPage />
                </Route>
                <Route path="/dashboard">
                    <DatabaseProvider>
                        <Dashboard />
                    </DatabaseProvider>
                </Route>
                {/* <Route path ="/test">
          <ThemeProvider >
            <FunctionContext/>
          </ThemeProvider>
        </Route> */}
            </Switch>
        </Router>
    );
}

export default App;
