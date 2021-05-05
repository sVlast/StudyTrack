import React from 'react';
import LogInModal from "./LogInModal.js";
import RegisterModal from "./RegisterModal.js";
import './Content.css';


function Content() {
    return (
        <>  
            <div className="banner">
            <div className="bannerleft">
            <img src="/images/BannerImg.png" alt="banner"></img>
            </div>
            <div className="bannerright">
                <p>Tvoje studiranje </p>
                <p id="blue">organizirano.</p>
                <LogInModal/>
            </div>
            </div>
            <div className="BlueContent">
                <p>Registriraj se odmah</p>
                <RegisterModal />
            </div>
        </>
    );
}

export default Content;