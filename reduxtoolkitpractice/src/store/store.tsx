import { configureStore } from "@reduxjs/toolkit";
import UserInfo from "../Slice/UserInfoSlice";

const store = configureStore({
  reducer: {
    userData: UserInfo,
  },
});

export default store;
