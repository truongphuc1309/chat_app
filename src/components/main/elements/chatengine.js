import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

function ChatEgine (props) {
    window.onload = () => {
        const sendBtn = document.querySelector('#ce-send-message-button');
        sendBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
        const formChatTitle = document.querySelector('.ce-chat-form-title');
        formChatTitle.innerHTML = localStorage.getItem('usr');
    }

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