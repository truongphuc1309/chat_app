import axios from "axios";

const ChatEngineApi = {
  secret: "@@@###$$$",
  config: (method, data) => {
    let configuration = {
      method: method,
      maxBodyLength: Infinity,
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "152678d3-9ca7-409d-87eb-51b47f67dc40",
      },
      data: data,
    };
    return configuration;
  },

  getUser: async (username) => {
    let usr = undefined;
    let data = {
      username: username,
    };
    let config = ChatEngineApi.config("put", data);
    try {
      let res = await axios(config);
      usr = res.data;
    } catch (error) {
      console.log(error);
    }
    return usr;
  },

  createOrGetUser: async (username) => {
    let data = {
      username: username,
      secret: ChatEngineApi.secret,
    };

    let config = ChatEngineApi.config("put", data);

    axios(config)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  },

  deleteMessage: async (chatId, messId) => {
    let configuration = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://api.chatengine.io/chats/${chatId}/messages/${messId}/`,
      headers: {
        "Project-ID": "142748e3-226c-40fc-91f3-ffa355d535a7",
        "User-Name": `${localStorage.getItem("usr")}`,
        "User-Secret": "@@@###$$$",
      },
    };

    try {
      await axios(configuration);
    } catch (error) {
      console.log(error);
    }
  },
};

export default ChatEngineApi;
