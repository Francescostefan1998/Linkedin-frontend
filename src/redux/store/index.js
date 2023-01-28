import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "../reducers/UserProfileReducer";
import newChatReducer from "../reducers/NewChatReducer";
import currentPostReducer from "../reducers/CurrentPostReducer";
const mainReducer = {
  user: userProfileReducer,
  newChat: newChatReducer,
  post: currentPostReducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
