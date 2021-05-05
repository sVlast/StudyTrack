import React,{useState} from 'react';
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
                <p>Tvoje studiranje </p>
                <p id="blue">organizirano.</p>
                <LogInModal isvisible={loginVisibility} changeVisibility={changeLogInVisibility} changeOther={changeRegisterVisibility}/>
            </div>
            </div>
            <div className="BlueContent">
                <p>Registriraj se odmah</p>
                <RegisterModal isvisible={registerVisibility} changeVisibility={changeRegisterVisibility} changeOther={changeLogInVisibility}/>
            </div>
        </>
    );
}

export default Content;