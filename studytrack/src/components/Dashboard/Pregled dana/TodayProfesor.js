import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import { List, Card } from "antd";
import "./TodayProfesor.css";
import Todo from "../To do lista/Todo";
import FeedbackModal from "../Modal/FeedbackModal.js";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";
import moment from "moment";
import CommentModal from "../Modal/CommentModal.js";

function TodayProfesor() {
  const [todos, setTodos] = useState([]);
  const [time, setTime] = useState(
    moment().add(2, "days").format("DD/MM/YYYY")
  );
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const userID = useDatabaseContext();

  const taskRef = firebase.database().ref("Users/" + userID + "/Task");
  const taskRefToday = firebase
    .database()
    .ref("Users/" + userID + "/Task")
    .orderByChild("dtstart")
    .equalTo(time);

  useEffect(() => {
    taskRefToday.on("value", (snapshot) => {
      const tasks = snapshot.val();
      const taskList = [];
      for (let id in tasks) {
        taskList.unshift({ id, ...tasks[id] });
      }
      setTodos(taskList);
      //console.log(tasks);
      //console.log(taskList);
    });

    return () => taskRef.off();
  }, []);

  return (
    <>
      <div className="today-parent">
        <div className="raspored">
          <h2>Daily schedule</h2>
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={todos}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title} extra={<CommentModal />}>
                  <span>{item.type}</span>
                  <span>{`${item.htstart} - ${item.htend}`}</span>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default TodayProfesor;
