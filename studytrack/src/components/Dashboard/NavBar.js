import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";

const { Header } = Layout;

const NavBar = ({ menu }) => {
    const [visible, setVisible] = useState(false);
    return (
        <Header className="navbar">
            <img src="/images/ST_Logo.png"></img>
            <Button
                className="menu"
                type="secondary"
                onClick={() => setVisible(true)}
            >
                Log out
            </Button>            
        </Header>
    );
};
export default NavBar;