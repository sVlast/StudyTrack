import React from 'react';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";

function LandingPage() {
    return (
        <>
            <LogInModal />
            <RegisterModal />
        </>
    );
}

export default LandingPage;