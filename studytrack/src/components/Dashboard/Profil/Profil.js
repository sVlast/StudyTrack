import React from 'react';
import FeedbackModal from '../Modal/FeedbackModal.js';
import PasswordForm from './PasswordForm.js';
import UsernameForm from './UsernameForm.js';


function Profil() {
    return (
        <div className="profil-content">
            <div className="user-content">
                <h2>Account information</h2>
                <UsernameForm />
            </div>
            <div className="pass-content">
                <h2>Change password</h2>
                <PasswordForm />
            </div>
            <FeedbackModal />
        </div>
    )
};

export default Profil;