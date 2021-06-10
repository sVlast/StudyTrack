import React, { useState, useEffect } from "react";
import PasswordForm from "./PasswordForm.js";
import UsernameForm from "./UsernameForm.js";
import { List, Card } from "antd";
import "./Profil.css";
import moment from "moment";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";
import firebase from "../../../util/firebase.js";

function Profil() {
    const [pointCollection, setPointCollection] = useState([]);
    const [time, setTime] = useState(moment().format("DD/MM/YYYY"));
    const [taskID, setTaskID] = useState("");
    const userID = useDatabaseContext();
    const taskRef = firebase.database().ref("Users/" + userID + "/Task");

    useEffect(() => {
        taskRef.on("value", (snapshot) => {
            const tasks = snapshot.val();
            const taskList = [];
            const temp = [];
            for (let id in tasks) {
                switch (tasks[id].title) {
                    case "Grafički dizajn":
                        if (temp["Grafički dizajn"] === undefined) {
                            temp["Grafički dizajn"] = {
                                title: "Grafički dizajn",
                                class: 0,
                                lab: 0,
                                classMax: 0,
                                labMax: 0,
                            };
                        }

                        if (tasks[id].type == "Predavanja") {
                            temp["Grafički dizajn"].classMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["Grafički dizajn"].class += 1;
                            }
                        } else if (tasks[id].type == "Laboratorijske vježbe") {
                            temp["Grafički dizajn"].labMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["Grafički dizajn"].lab += 1;
                            }
                        } else {
                            console.error("Error!");
                        }
                        break;
                    case "Digitalna fotografija":
                        if (temp["Digitalna fotografija"] === undefined) {
                            temp["Digitalna fotografija"] = {
                                title: "Digitalna fotografija",
                                class: 0,
                                lab: 0,
                                classMax: 0,
                                labMax: 0,
                            };
                        }

                        if (tasks[id].type == "Predavanja") {
                            temp["Digitalna fotografija"].classMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["Digitalna fotografija"].class += 1;
                            }
                        } else if (tasks[id].type == "Laboratorijske vježbe") {
                            temp["Digitalna fotografija"].labMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["Digitalna fotografija"].lab += 1;
                            }
                        } else {
                            console.error("Error!");
                        }
                        break;
                    case "Poslovni engleski jezik za IT":
                        if (
                            temp["Poslovni engleski jezik za IT"] === undefined
                        ) {
                            temp["Poslovni engleski jezik za IT"] = {
                                title: "Poslovni engleski jezik za IT",
                                class: 0,
                                lab: 0,
                                classMax: 0,
                                labMax: 0,
                            };
                        }

                        if (tasks[id].type == "Predavanja") {
                            temp["Poslovni engleski jezik za IT"].classMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp[
                                    "Poslovni engleski jezik za IT"
                                ].class += 1;
                            }
                        } else if (tasks[id].type == "Auditorne vježbe") {
                            temp["Poslovni engleski jezik za IT"].labMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["Poslovni engleski jezik za IT"].lab += 1;
                            }
                        } else {
                            console.error("Error!");
                        }
                        break;
                    case "XML programiranje":
                        if (temp["XML programiranje"] === undefined) {
                            temp["XML programiranje"] = {
                                title: "XML programiranje",
                                class: 0,
                                lab: 0,
                                classMax: 0,
                                labMax: 0,
                            };
                        }

                        if (tasks[id].type == "Predavanja") {
                            temp["XML programiranje"].classMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["XML programiranje"].class += 1;
                            }
                        } else if (tasks[id].type == "Auditorne vježbe") {
                            temp["XML programiranje"].labMax += 1;
                            if (
                                tasks[id].wasPresent &&
                                tasks[id].comment != ""
                            ) {
                                temp["XML programiranje"].lab += 1;
                            }
                        } else {
                            console.error("Error!");
                        }
                        break;
                }
                //taskList.unshift(temp);
            }
            //console.log(temp);
            for (let i in temp) {
                taskList.push(temp[i]);
            }
            setPointCollection(taskList);
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
                    dataSource={pointCollection}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <span>
                                    <span>Predavanja</span>
                                    <span>
                                        {item.class}/{item.classMax}
                                    </span>
                                </span>
                                <span>
                                    <span>Laboratorijske Vježbe</span>
                                    <span>
                                        {item.lab}/{item.labMax}
                                    </span>
                                </span>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default Profil;
