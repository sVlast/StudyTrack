import React from 'react';
import LogInModal from "./LogInModal.js";
import './Banner.css';


function Banner() {
    return (
        <>  
            <br/>
            <div className="banner">
            <div className="bannerleft">
            <img src="/images/BannerImg.png" alt="banner"></img>
            </div>
            <div className="bannerright">
                <p>Tvoje studiranje</p>
                <p id="blue">organizirano.</p>
                <LogInModal/>
            </div>
            </div>
        </>
    );
}

export default Banner;