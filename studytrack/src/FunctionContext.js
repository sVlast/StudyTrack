import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext.js";

export default function FunctionContext() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle theme</button>
            <div style={themeStyles}>Function Context</div>
        </>
    );
}
