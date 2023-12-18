import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCx2ira580l5uaFpY7LDIHKNFhYYG36-5c",
    authDomain: "chat-app-bf65e.firebaseapp.com",
    projectId: "chat-app-bf65e",
    storageBucket: "chat-app-bf65e.appspot.com",
    messagingSenderId: "200506640495",
    appId: "1:200506640495:web:67bc70a449412299f6259a",
    measurementId: "G-K61QFBX2PN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth}