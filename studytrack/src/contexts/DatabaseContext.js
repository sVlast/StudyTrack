import React, { useState, useContext, useEffect } from "react";
import firebase, { auth } from "../util/firebase.js";

const DatabaseContext = React.createContext();

export function useDatabaseContext() {
    return useContext(DatabaseContext);
}

export default function DatabaseProvider({ children }) {
    const [userID, setUserID] = useState(
        firebase.auth().currentUser ? firebase.auth().currentUser.uid : "empty"
    );

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUserID(firebase.auth().currentUser.uid);
        } else {
            console.log("DatabaseContext ", "User Signed out!");
        }
    });

    //const userID = auth.currentUser ? auth.currentUser.uid : "empty";
    //const userID = firebase.auth().currentUser.uid;

    console.log("databasecontext:", userID);
    //console.log(auth.currentUser);

    return (
        <DatabaseContext.Provider value={userID}>
            {children}
        </DatabaseContext.Provider>
    );
}
