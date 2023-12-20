import ChatEngineApi from "../../../services/chatengineAPI";

const customize = () => {
    const sendBtn = document.querySelector('#ce-send-message-button');
    sendBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
    const formChatTitle = document.querySelector('.ce-chat-form-title');
    formChatTitle.innerHTML = localStorage.getItem('usr');
    const backBtnM = document.querySelector('.ce-mobile-chat-list-button');
    backBtnM.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    const settingsBtnM = document.querySelector('.ce-mobile-chat-settings-button');
    settingsBtnM.innerHTML = '<i class="fa-solid fa-bars"></i>';

    try {
        const messes = document.querySelectorAll('.ce-message-list [id^="ce-message"]');
        const lastMess = messes[messes.length - 1];
        const lastMessContent = lastMess.querySelector('.ce-my-message-body');
        const deleteEmtyMess = async () => {
            const chatList = document.querySelector('[id^="ce-message-list"]');
            const chatIdArr = chatList.id.split('-');
            const chatId = chatIdArr[chatIdArr.length - 1];
            const messIdArr = lastMess.id.split('-');
            const messId = messIdArr[messIdArr.length - 1];
            await ChatEngineApi.deleteMessage(chatId, messId);
        }
        if (lastMessContent)
        {
            const haveFile = lastMess.querySelector('.ce-my-message-files .ce-message-file');
            const haveImg = lastMess.querySelector('.ce-my-message-images img');
            console.log(haveFile);
            console.log(haveImg);
            if (lastMessContent.innerHTML === '' && !haveFile && !haveImg){
                lastMess.style.display = 'none';
                deleteEmtyMess();
            }
        }
    
        const theirMesses = document.querySelectorAll('.ce-their-message-body');
        for (let theirMess of theirMesses){
            if (theirMess.innerHTML === '')
                theirMess.style.display = 'none';
        }

        const myMesses = document.querySelectorAll('.ce-my-message-body');
        for (let myMess of myMesses){
            if(myMess.innerHTML === '')
                myMess.style.display = 'none';
        }


    }catch{

    }

    const isMobile = document.querySelector('.ce-chat-engine > .ce-chat-list');
    const navbar = document.querySelector('.navbar');
    const formBtn = document.querySelector('.ce-chat-form-button');

    if (!isMobile){
        navbar.classList.add('disable');
        formBtn.classList.add('disable');
    }
    else{
        navbar.classList.remove('disable');
        formBtn.classList.remove('disable');
    }
}

export default customize;