import React from 'react';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";

function Home() {
    return (
        <>
            <LogInModal />
            <RegisterModal />
        </>
    );
}

export default Home;