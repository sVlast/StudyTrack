import React from 'react';
import Banner from './Banner.js';
import BlueContent from './BlueContent.js';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";

function LandingPage() {
    return (
        <>
            <LogInModal />
            <RegisterModal />
            <Banner/>
            <BlueContent/>
        </>
    );
}

export default LandingPage;