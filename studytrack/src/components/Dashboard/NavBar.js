import React, { useState } from "react";
import app,{auth} from "../../util/firebase.js";
import {useHistory} from 'react-router-dom';
import { Layout, Button } from "antd";
import "./NavBar.css";

const { Header } = Layout;

const NavBar = ({ menu }) => {
    const history = useHistory();

    function handleLogOut() {
        
        auth.signOut().then(() => {
            history.push("/");
            console.log("User Sign Out");
        });
        
    }
    
    return (
        <Header className="navbar">
            <img src="/images/ST_Logo.png"></img>
            <Button
                className="menu"
                type="secondary"
                onClick={() => handleLogOut()}
            >
                Log out
            </Button>            
        </Header>
    );
};
export default NavBar;