import { useEffect } from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

import customize from '../handlers/customChatengine';

function ChatEgine (props) {

    useEffect(customize);

    const chatProps = useMultiChatLogic('486712a2-ee55-465f-9e40-235a8f597666',props.user, '@@@###$$$');

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
