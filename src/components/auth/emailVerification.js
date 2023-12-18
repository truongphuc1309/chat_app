import { applyActionCode} from "firebase/auth";
import React, {useEffect, useState } from "react";

import { auth } from "../../services/firebase";
import "./emailVerification.scss";

export default function EmailVerification () {
    const currentTimeByMin = Date.now() /60000;
    const emailSentAt = JSON.parse(localStorage.getItem('emailSentAt'));
    console.log (emailSentAt);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const actionCode = urlParams.get('oobCode');
    const [isSuccess, setIsSuccess] = useState(true);
    console.log(actionCode);

    useEffect (() => {
        if (emailSentAt && (currentTimeByMin - emailSentAt < 5))
        {
            applyActionCode(auth, actionCode).then((resp) => {
                setIsSuccess(true);
                localStorage.removeItem('emailSentAt');
            }).catch((error) => {
                setIsSuccess(false);
                localStorage.removeItem('emailSentAt');
            });
        }else{
            setIsSuccess(false);
            localStorage.removeItem('emailSentAt');
        }
    }, []);

    return (
        <div className="verifyEmail-container">
            <div className={`fail ${isSuccess?'':'active'}`}>
                <div className="symbol">
                    <i className="fa-solid fa-circle-xmark"></i>
                    
                </div>
                <h1 className="title">Fail To Verify Email!</h1>
                <p className="sub-title">Your request to verify your email has expired or the
                    link has already been used
                </p>
            </div>
            <div className={`success ${isSuccess?'active':''}`}>
                <div className="symbol">
                    <i className="fa-solid fa-circle-check"></i>
                </div>
                <h1 className="title">Verified Email Successfully!</h1>
                <p className="sub-title">Now you can log in your account</p>
            </div>
        </div>
    );
}