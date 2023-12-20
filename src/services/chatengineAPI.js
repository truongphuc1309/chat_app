import axios from 'axios';

const ChatEngineApi = {
    secret : '@@@###$$$',
    config: (method, data) => {
        let configuration = {
            method: method,
            maxBodyLength: Infinity,
            url: 'https://api.chatengine.io/users/',
            headers: { 
              'PRIVATE-KEY': '65babbff-f091-4e59-8935-93765927c36f',
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
          'Project-ID': '6901fd70-d60e-4679-9122-5758b48eadca', 
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