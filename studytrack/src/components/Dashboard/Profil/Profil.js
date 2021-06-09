import React, {useState, useEffect} from 'react';
import PasswordForm from './PasswordForm.js';
import UsernameForm from './UsernameForm.js';
import { List, Card } from "antd";
import './Profil.css';
import moment from 'moment';
import { useDatabaseContext } from '../../../contexts/DatabaseContext.js';
import firebase from "../../../util/firebase.js";


function Profil() {
    const [todos, setTodos] = useState([]);
    const [time, setTime] = useState(moment().format("DD/MM/YYYY"));
    const [taskID, setTaskID] = useState("");
    const userID = useDatabaseContext();
    const taskRef = firebase.database().ref("Users/" + userID + "/Task");

    useEffect(() => {
        taskRef.on("value", (snapshot) => {
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
        <div className="profil-parent">
            <div className="profil-content">
                <div className="user-content">
                    <h2>Account information</h2>
                    <UsernameForm />
                </div>
                <div className="pass-content">
                    <h2>Change password</h2>
                    <PasswordForm />
                </div>
            </div>
            <div className="profil-cards">
                <h2>Your points:</h2>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={todos}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <span>
                                    <span>{item.type}</span>
                                    <span>3</span>
                                </span>
                                <span>
                                    <span>{item.type}</span>
                                    <span>4</span>
                                </span>

                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
};

export default Profil;