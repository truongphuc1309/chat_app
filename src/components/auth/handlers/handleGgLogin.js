import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

import { auth } from '../../../services/firebase';
import ChatEngineApi from '../../../services/chatengineAPI';
import createUserName from './creatUserName';

const handleGgLogin = async () => {
    const provider = new GoogleAuthProvider();
    try{
        await signInWithPopup(auth, provider);
        let createAt = auth.currentUser.metadata.createdAt;
        let userName = createUserName(auth.currentUser.displayName, createAt);
        await ChatEngineApi.createOrGetUser(userName);
        localStorage.setItem('usr', userName);
        window.location.replace('/');
    }catch(error){
        console.warn('Fail to connect to Google');
    }
}

export default handleGgLogin;