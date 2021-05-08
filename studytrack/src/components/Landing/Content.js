import React, { useState } from 'react';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";
import './Content.css';




function Content() {
    const [loginVisibility, changeLogInVisibility] = useState(false)
    const [registerVisibility, changeRegisterVisibility] = useState(false)

    return (
        <>
            <div className="banner">
                <div className="bannerleft">
                    <img src="/images/BannerImg.png" alt="banner"></img>
                </div>
                <div className="bannerright">
                    <p>Your studying </p>
                    <p id="blue">organized.</p>
                    <LogInModal isvisible={loginVisibility} changeVisibility={changeLogInVisibility} changeOther={changeRegisterVisibility} />
                </div>
            </div>
            <div className="BlueContent">
                <p>Register now</p>
                <RegisterModal isvisible={registerVisibility} changeVisibility={changeRegisterVisibility} changeOther={changeLogInVisibility} />
            </div>
        </>
    );
}

export default Content;