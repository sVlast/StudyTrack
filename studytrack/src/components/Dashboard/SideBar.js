import React from "react";
import { Layout } from "antd";
import "./SideBar.css"

const SideBar = ({ menu }) => {


    return (
        <Layout.Sider
            collapsible="true"
            className="sidebar"
            breakpoint={"lg"}
            theme="light"
            collapsedWidth={80}

        >
            {menu}
        </Layout.Sider>
    );
};
export default SideBar;