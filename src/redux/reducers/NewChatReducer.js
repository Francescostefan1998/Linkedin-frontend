const initialState = {
  chatuser: [],
};

const newChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEW_NAME":
      return {
        ...state,
        chatuser: [action.payload, ...state.chatuser],
      };
    default:
      return {
        ...state,
      };
  }
};

export default newChatReducer;
