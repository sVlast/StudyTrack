import React, { useState, useEffect } from "react";
import { Calendar, Badge } from "antd";
import calendar from "./calendar.json";
import moment from "moment";
import firebase from "../../../util/firebase.js";
import { useDatabaseContext, useProfileType } from "./../../../contexts/DatabaseContext";
import CommentModal from "../Modal/CommentModal";

function Kalendar() {
  const userID = useDatabaseContext();
  const taskRef = firebase.database().ref("Users/" + userID + "/Task");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    taskRef.on("value", (snapshot) => {
      const tasks = snapshot.val();
      const taskList = [];
      for (let id in tasks) {
        taskList.unshift({ id, ...tasks[id] });
      }
      setTodos(taskList);
    });

    return () => taskRef.off();
  }, []);

  /* const formattedEntries = () =>
    calendar.vcalendar[0].vevent.map((item) => ({
      ...item,
      dtstart: moment(moment(item.dtstart).toDate()).format("DD/MM/YYYY"),
    })); */

  const getListData = (value) => {
    const date = value.format("DD/MM/YYYY");
    const entriesByCurrentDate = todos.filter((item) => item.dtstart === date);

    return entriesByCurrentDate.map((item) => ({
      type: "success",
      content: item.description,
      ...item,
    }));
  };

  function dateCellRender(value) {
    // eslint-disable-next-line
    const { type } = useProfileType();
    const listData = getListData(value);
    // eslint-disable-next-line
    const [isVisible, setIsVisible] = useState();
    const onCalendarItemClick = () => {
      if (type === 'profesor') {
        // pokazi profesorov modal
        setIsVisible(true);
      }
    }
    return (
      <>
        <ul className="events">
          {listData.map((item) => (
            <li key={item.uid} onClick={onCalendarItemClick}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
        <CommentModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </>
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
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
}

export default Kalendar;
