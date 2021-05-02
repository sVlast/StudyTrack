import React from 'react';
import RegisterModal from "./RegisterModal.js";
import './BlueContent.css';


function BlueContent() {
    return (
        <>
            <div className="BlueContent">    
                <p>Registriraj se odmah</p>    
                <RegisterModal/>
            </div>
        </>
    );
}

export default BlueContent;