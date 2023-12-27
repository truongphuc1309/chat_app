import { useEffect } from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

import customize from '../handlers/customChatengine';

function ChatEgine (props) {

    useEffect(customize);

    const chatProps = useMultiChatLogic('bd9a38d7-b457-4e95-94dd-936166d95f2b',props.user, '@@@###$$$');

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