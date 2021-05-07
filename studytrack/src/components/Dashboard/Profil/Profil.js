import React from 'react';
import PasswordForm from './PasswordForm.js';
import UsernameForm from './UsernameForm.js';


function Profil(){
    return(
        <div className="profil-content">
            <div className="user-content">
                <h2>Account information</h2>
                <UsernameForm />
            </div>
            <div className="pass-content">
                <h2>Change password</h2>
                <PasswordForm />
            </div>
        </div>
    )
};

export default Profil;