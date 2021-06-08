import React from 'react';
import PasswordForm from './PasswordForm.js';
import UsernameForm from './UsernameForm.js';
import { List, Card } from "antd";
import './Profil.css';


function Profil() {
    const data = [
        {
            title: "Naslov",
            type: "Tip",
            points: 6,
            overallPoints: 8
        }, {
            title: "Naslov",
            type: "Tip",
            points: 6,
            overallPoints: 8
        }, {
            title: "Naslov",
            type: "Tip",
            points: 6,
            overallPoints: 8
        }, {
            title: "Naslov",
            type: "Tip",
            points: 6,
            overallPoints: 8
        }, {
            title: "Naslov",
            type: "Tip",
            points: 6,
            overallPoints: 8
        }, {
            title: "Naslov",
            type: "Tip",
            points: 6,
            overallPoints: 8
        }
    ]
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
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <span>
                                    <span>{item.type}</span>
                                    <span>{`${item.points} / ${item.overallPoints}`}</span>
                                </span>
                                <span>
                                    <span>{item.type}</span>
                                    <span>{`${item.points} / ${item.overallPoints}`}</span>
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