import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../services/firebase";
import handleSendEmailVerification from "./handleSendEmailVerification"
import ChatEngineApi from "../../../services/chatengineAPI";

const handleLogin = async () => {
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    try{
        await signInWithEmailAndPassword(auth, email, password);
        if (auth.currentUser.emailVerified){
            let userName = auth.currentUser.displayName;
            ChatEngineApi.createOrGetUser(userName);
            localStorage.setItem('usr', userName);
            window.location.replace('/');
        }else{
            handleSendEmailVerification();
        }
    }catch (error){
        const passwordForm = document.querySelector('#login-password').parentElement;
        const passwordMess = passwordForm.querySelector('.message');
        passwordMess.innerHTML = '* Invalid information!'
    }

}

export default handleLogin;