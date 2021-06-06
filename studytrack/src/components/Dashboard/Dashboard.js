import React, { useState, useEffect } from "react";
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
import Converter from "./Kalendar/Converter.js";
import Profil from "./Profil/Profil.js";
import {
  DashboardOutlined,
  CalendarOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import TodayProfesor from "./Pregled dana/TodayProfesor.js";
import firebase from "./../../util/firebase";

const { Content } = Layout;

function Dashboard() {
  //icons must same length as topics check TopicMenu.js
  const topics = ["today", "calendar", "profile"];
  const icons = [
    <DashboardOutlined />,
    <CalendarOutlined />,
    // <OrderedListOutlined />,
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

  const [time, setTime] = useState(moment().format("DD.MM.YYYY"));

  // citanje type-a accounta
  /* const tempoRef = firebase.database().ref("Users/" + userID + "/type")
  tempoRef.on("value", (snapshot) => {
      const profType = snapshot.val()
      console.log("tip: ", profType)
  }) */

  let type = "profesor";

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
                <h1>Today is: {time}</h1>
                {type === "profesor" ? <TodayProfesor /> : <Today />}
                {/* <Converter /> */}
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
          {/* <Route
                        path="/dashboard/todo"
                        component={() => (
                            <div className="todo-dash">
                                <h1>To do list</h1>
                                <TodoList />
                            </div>
                        )}
                    /> */}
        </Content>
      </Layout>
    </div>
  );
}
export default Dashboard;
