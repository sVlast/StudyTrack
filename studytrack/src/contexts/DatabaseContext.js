import React, { useState, useContext } from "react";
import firebase, { auth } from "../util/firebase.js";

const DatabaseContext = React.createContext();

const userID = auth.currentUser ? auth.currentUser.uid : null;

export function useDatabaseContext() {
    return useContext(DatabaseContext);
}

export default function DatabaseProvider({ children }) {
    //const [userID,] = useState(auth.currentUser);

    return (
        <DatabaseContext.Provider value={userID}>
            {children}
        </DatabaseContext.Provider>
    );
}
