import React from "react";

export default function VerifyEmailPopUp (){
    function handleClose (){
        const verifyEmailPopup = document.querySelector('.verify-email-popup');
        verifyEmailPopup.classList.remove('active');
    }

    return (
        <div className= "verify-email-popup">
          <div className= "popup-container">
              <div className="popup-header">
                <div className="popup-img-container">
                    <img src = 'https://cdn.icon-icons.com/icons2/1229/PNG/512/1492692367-6email_83538.png' 
                    className="popup-img">
                    </img>
                </div>
              </div>
              <h1 className="popup-title">Verify Your Email</h1>
              <p className="popup-content">
                We have sent a link to your email 
                <br/> This link will expire in <b>5 minutes</b>.
                <br/> Please check your email and verify this email.
              </p>
              <button className="btn close-popup" onClick={handleClose}>OK</button>
          </div>
        </div>
    );
}