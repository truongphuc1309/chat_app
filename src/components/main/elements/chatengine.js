import { useEffect } from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

import customize from '../handlers/customChatengine';

function ChatEgine (props) {

    useEffect(customize);

    const chatProps = useMultiChatLogic('63b00dfb-0d32-4308-96dc-c5a0b72ef2a5',props.user, '@@@###$$$');

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