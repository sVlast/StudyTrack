import React from 'react';
import Banner from './Banner.js';
import BlueContent from './BlueContent.js';
import Header from './Header.js';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";

function LandingPage() {
    return (
        <>
            <LogInModal />
            <RegisterModal />
            <Header/>
            <Banner/>
            <BlueContent/>
        </>
    );
}

export default LandingPage;