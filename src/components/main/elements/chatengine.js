import { useEffect } from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

import customize from '../handlers/customChatengine';

function ChatEgine (props) {

    useEffect(customize);

    const chatProps = useMultiChatLogic('6901fd70-d60e-4679-9122-5758b48eadca',props.user, '@@@###$$$');

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