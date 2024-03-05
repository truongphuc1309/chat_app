import axios from 'axios';

const ChatEngineApi = {
    secret : '@@@###$$$',
    config: (method, data) => {
        let configuration = {
            method: method,
            maxBodyLength: Infinity,
            url: 'https://api.chatengine.io/users/',
            headers: { 
              'PRIVATE-KEY': 'd4b7575a-0105-44cf-909b-068784c81b5f',
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
          'Project-ID': '486712a2-ee55-465f-9e40-235a8f597666', 
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
