import { useEffect } from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

import customize from '../handlers/customChatengine';

function ChatEgine (props) {

    useEffect(customize);

    const chatProps = useMultiChatLogic('44a0f3c3-e5ed-4067-ac30-c41eac813737',props.user, '@@@###$$$');

    return (     
        <div style = {{height : '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow 
                {...chatProps}
                style={{height : '100%', marginLeft: '74px'}}
            />
        </div>
    );
}

export default ChatEgine;