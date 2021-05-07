import React, { useState } from "react";
import { Layout } from "antd";
import { Route, useHistory } from 'react-router-dom';
import TopicMenu from "./TopicMenu";
import "./Dashboard.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TodoList from "./To do lista/TodoList";
import Today from "./Pregled dana/Today";
import Kalendar from "./Kalendar/Kalendar";
import Profil from "./Profil/Profil.js";


function Dashboard() {
    const topics = ["Today", "Calendar", "ToDo", "Profile"];
    const history = useHistory();

    const [contentIndex, setContentIndex] = useState(0);
    const changeSelectedKey = (event) => {
        const key = event.key;
        history.push(`/Dashboard/${topics[key]}`);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={contentIndex.toString()}
            changeSelectedKey={changeSelectedKey}
        />
    );

    return (
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    <Route path="/dashboard/today" component={() => (
                        <div className='today'>
                            <h1>Today's tasks</h1>
                            <Today/>
                        </div>
                    )} />
                    <Route path="/dashboard/calendar" component={() => (
                        <div className='kalendar'>
                            <h1>Calendar</h1>
                            <Kalendar/>
                        </div>
                    )} />
                    <Route path="/dashboard/profile" component={() => (

                        <div className='profil'>
                            <h1>Profile</h1>
                            <Profil />
                        </div>
                    )} />
                    <Route path="/dashboard/todo" component={() => (
                        <div className='todo-dash'>
                            <h1>To do list</h1>
                            <TodoList />
                        </div>
                    )} />


                </Layout.Content>
            </Layout>
        </div>
    );
}
export default Dashboard;