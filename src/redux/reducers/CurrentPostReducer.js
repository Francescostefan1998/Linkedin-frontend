const initialState = {
  post: null,
};

const currentPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEW_POST":
      return {
        ...state,
        post: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default currentPostReducer;
