import React, { useState } from "react";
import { Layout, Calendar, Badge } from "antd";
import { Route, useHistory } from 'react-router-dom';

import TopicMenu from "./TopicMenu";
import "./Dashboard.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TodoList from "./To do lista/TodoList";


function Dashboard() {
    const topics = ["Calendar", "ToDo", "Profile"];
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

    function getListData(value) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'success', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'success', content: 'This is error event 1.' },
                    { type: 'success', content: 'This is error event 2.' },
                    { type: 'success', content: 'This is error event 3.' },
                    { type: 'success', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    function getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }




    return (
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    <Route path="/dashboard/Calendar" component={() => (

                        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                    )} />
                    <Route path="/dashboard/Profile" component={() => (

                        <div>Profle</div>
                    )} />
                    <Route path="/dashboard/ToDo" component={() => (

                        <TodoList/>
                    )} />


                </Layout.Content>
            </Layout>
        </div>
    );
}
export default Dashboard;