import React, { useState } from "react";
import { useDatabaseContext } from "../../contexts/DatabaseContext.js";
import { Layout } from "antd";
import { Route, useHistory } from "react-router-dom";
import TopicMenu from "./TopicMenu";
import "./Dashboard.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TodoList from "./To do lista/TodoList";
import Today from "./Pregled dana/Today";
import Kalendar from "./Kalendar/Kalendar";
import Profil from "./Profil/Profil.js";
import {
    DashboardOutlined,
    CalendarOutlined,
    OrderedListOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

function Dashboard() {
    //icons must same length as topics check TopicMenu.js
    const topics = ["today", "calendar", "todo", "profile"];
    const icons = [
        <DashboardOutlined />,
        <CalendarOutlined />,
        <OrderedListOutlined />,
        <UserOutlined />,
    ];
    const history = useHistory();

    const [contentIndex, setContentIndex] = useState(0);
    const changeSelectedKey = (event) => {
        const key = event.key;
        history.push(`/dashboard/${topics[key]}`);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            icons={icons}
            selectedKey={contentIndex.toString()}
            changeSelectedKey={changeSelectedKey}
        />
    );
    // return firebase auth user ID
    const userID = useDatabaseContext();

    return (
        <div className="App">
            <Layout className="layout">
                <NavBar menu={Menu} />
                <SideBar menu={Menu} />
                <Content className="content">
                    <Route
                        exact
                        path="/dashboard/(today)?"
                        component={() => (
                            <div className="today">
                                <h1>Today's tasks</h1>
                                <Today />
                            </div>
                        )}
                    />
                    <Route
                        path="/dashboard/calendar"
                        component={() => (
                            <div className="kalendar">
                                <h1>Calendar</h1>
                                <Kalendar />
                            </div>
                        )}
                    />
                    <Route
                        path="/dashboard/profile"
                        component={() => (
                            <div className="profil">
                                <h1>Profile</h1>
                                <Profil />
                            </div>
                        )}
                    />
                    <Route
                        path="/dashboard/todo"
                        component={() => (
                            <div className="todo-dash">
                                <h1>To do list{userID}</h1>
                                <TodoList value={userID} />
                            </div>
                        )}
                    />
                </Content>
            </Layout>
        </div>
    );
}
export default Dashboard;
