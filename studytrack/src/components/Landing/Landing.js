import React from 'react';
import Banner from './Banner.js';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";

function LandingPage() {
    return (
        <>
            <LogInModal />
            <RegisterModal />
            <Banner/>
        </>
    );
}

export default LandingPage;