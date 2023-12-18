import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

import { auth } from "../../../services/firebase";
import handleSendEmailVerification from "./handleSendEmailVerification";
import ChatEngineApi from "../../../services/chatengineAPI";

const handleSignup = async () => {

    const name = document.querySelector('#user-name').value;
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    const repassword = document.querySelector('#signup-repassword').value;
    
    console.log (name, email, password, repassword);
    
    if (password !== repassword)
    {
        const repasswordForm = document.querySelector('#signup-repassword').parentElement;
        const repasswordInput = document.querySelector('#signup-repassword');
        const repasswordMess = repasswordForm.querySelector('.message');
        repasswordMess.innerHTML = 'Confirm password incorrect!';
        repasswordInput.classList.add('invalid');
    }else{
        let isUserNameExist = await ChatEngineApi.getUser(name);
        if(!isUserNameExist){
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(auth.currentUser, {
                    displayName:name,
                });
                handleSendEmailVerification();
            }catch (error){
                const emailForm = document.querySelector('#signup-email').parentElement;
                const emailInput = document.querySelector('#signup-email');
                const emailMess = emailForm.querySelector('.message');
                const emailLabel = emailForm.querySelector('label');
                emailInput.style.borderColor = '#f01d1d';
                emailLabel.style.color = '#f01d1d';
                emailMess.innerHTML = 'Email already in use!';
                emailInput.classList.add('invalid');
            }
            return true;
        }else{
            const userNameInput = document.querySelector('#user-name');
            const userNameForm = userNameInput.parentElement;
            const userNameMess = userNameForm.querySelector('.message');
            const userNameLabel = userNameForm.querySelector('label');
            userNameInput.classList.add('invalid');
            userNameInput.style.borderColor = '#f01d1d';
            userNameLabel.style.color = '#f01d1d';
            userNameMess.innerHTML = 'User Name already in use!';
        }
    }

    return false;
}

export default handleSignup;