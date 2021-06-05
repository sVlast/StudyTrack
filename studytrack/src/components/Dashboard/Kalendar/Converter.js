import React from "react";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";
import firebase from "../../../util/firebase.js";
import calendar from "./calendar-single.json";
import { Button } from "antd";
import moment from "moment";

function parseType(input) {
    let ss = input.split("\\n");
    let type = ss[0].split(" - ");
    return { title: type[0], type: type[1] };
}

export default function Converter() {
    const userID = useDatabaseContext();

    const backupRef = firebase.database().ref("Users/" + userID + "/Task");

    function readGoogleCal(cal) {
        console.log(userID);
        cal.vcalendar[0].vevent.map((item) => {
            if (item.rrule) {
                console.log(item);
                let type = parseType(item.description);
                for (let i = 0; i < item.rrule.count; i++) {
                    let obj = {
                        dtstart: moment(moment(item.dtstart[0]).toDate())
                            .add(7 * i, "days")
                            .format("DD/MM/YYYY HH:mm:ss"),
                        dtend: moment(moment(item.dtend[0]).toDate())
                            .add(7 * i, "days")
                            .format("DD/MM/YYYY HH:mm:ss"),
                        complete: false,
                        wasPresent: false,
                        description: item.description,
                        title: type.title,
                        type: type.type,
                        comment: "",
                        grade: 0,
                    };
                    console.log("obj", obj);
                    backupRef.push(obj);
                }
            }
        });
    }

    return (
        <div>
            <Button onClick={() => readGoogleCal(calendar)}>
                IMPORT CALENDAR TEST
            </Button>
        </div>
    );
}
