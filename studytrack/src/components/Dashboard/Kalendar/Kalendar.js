import React from "react";
import { Calendar, Badge } from "antd";
import calendar from "./calendar.json";
import calSingle from "./calendar-single.json";
import moment from "moment";

const formattedEntries = () =>
    calendar.vcalendar[0].vevent.map((item) => ({
        ...item,
        dtstart: moment(moment(item.dtstart).toDate()).format("DD/MM/YYYY"),
    }));

const getListData = (value) => {
    const date = value.format("DD/MM/YYYY");
    const entriesByCurrentDate = formattedEntries().filter(
        (item) => item.dtstart === date
    );

    return entriesByCurrentDate.map((item) => ({
        type: "success",
        content: item.description,
        ...item,
    }));
};

function dateCellRender(value) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {listData.map((item) => (
                <li key={item.uid} onClick={() => console.log(item)}>
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

function Kalendar() {
    return (
        <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
        />
    );
}

export default Kalendar;
