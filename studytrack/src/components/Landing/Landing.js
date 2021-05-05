import React from 'react';
import Banner from './Banner.js';
import BlueContent from './BlueContent.js';
import Header from './Header.js';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";
import {useState,useEffect} from 'react';
import { Modal } from 'antd';

function LandingPage() {
    return (
        <>
            {/* <LogInModal isvisible1={loginVisibility} changeVisibility1={changeLogInVisibility} />
            <RegisterModal isvisible={registerVisibility} changeVisibility={changeRegisterVisibility} /> */}
            <Header/>
            <Banner/>
            <BlueContent/>
        </>
    );
}

export default LandingPage;