import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";


const NavBar = ({ menu }) => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className="navbar">
            <img src="/images/ST_Logo.png"></img>
            <Button
                className="menu"
                type="secondary"
                onClick={() => setVisible(true)}
            >
                Log out
            </Button>
        </nav>
    );
};
export default NavBar;