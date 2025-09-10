import { createSlice } from "@reduxjs/toolkit";

interface initslaStateIterFace {
  userInfo: object;
}
const initialState: initslaStateIterFace = {
  userInfo: {},
};

const UserInfoSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
    },
  },
});

export const { addUserInfo } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
