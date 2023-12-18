import React from "react";

import './index.scss'
import NavBar from "./elements/navbar";
import ChatEgine from "./elements/chatengine";

function Main () {
    let user = localStorage.getItem('usr');
    if (!user) 
      window.location.replace('/auth');
    return (
        <>  
            <NavBar user = {user}/>
            <ChatEgine user = {user}/>
        </>
    );
}

export default Main;