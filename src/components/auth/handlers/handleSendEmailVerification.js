
import { auth } from "../../../services/firebase";

import { sendEmailVerification } from "firebase/auth";

const  handleSendEmailVerification = async() => {
    await sendEmailVerification(auth.currentUser)
    .then(() => {
        const currentTimeByMin = Date.now() /60000;
        localStorage.setItem('emailSentAt', currentTimeByMin);
        const verifyEmailPopup = document.querySelector('.verify-email-popup');
        verifyEmailPopup.classList.add('active');
    })
    .catch ((e) => {
        alert(e);
    });
}

export default handleSendEmailVerification;