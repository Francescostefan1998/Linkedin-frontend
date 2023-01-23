import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "../reducers/UserProfileReducer";
import newChatReducer from "../reducers/NewChatReducer";
const mainReducer = {
  user: userProfileReducer,
  newChat: newChatReducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
