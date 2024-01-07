import axios from 'axios';

const ChatEngineApi = {
    secret : '@@@###$$$',
    config: (method, data) => {
        let configuration = {
            method: method,
            maxBodyLength: Infinity,
            url: 'https://api.chatengine.io/users/',
            headers: { 
              'PRIVATE-KEY': '871347ac-8b1b-4d7f-8220-fe0cd8bb70b2',
            },
            data : data
        };
        return configuration;
    },

    getUser : async (username) => {
      let usr = undefined;
      let data =  {
          username: username,
      }
      let config = ChatEngineApi.config('put', data);
      try {
        let res = await axios(config);    
        usr = res.data; 
      } catch (error) {
        console.log(error);
      }
      return usr;
    },

    createOrGetUser : async (username) => {
      let data =  {
          username: username,
          secret: ChatEngineApi.secret,
      }
      
      let config = ChatEngineApi.config('put', data);
      
      axios(config)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });   
    },

    deleteMessage: async (chatId, messId) => {
      let configuration = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `https://api.chatengine.io/chats/${chatId}/messages/${messId}/`,
        headers: { 
          'Project-ID': '63b00dfb-0d32-4308-96dc-c5a0b72ef2a5', 
          'User-Name': `${localStorage.getItem('usr')}`, 
          'User-Secret': '@@@###$$$',
        },
      };

      try {
        await axios(configuration)
      } catch (error) {
        console.log(error);
      }

    }
}

export default ChatEngineApi;