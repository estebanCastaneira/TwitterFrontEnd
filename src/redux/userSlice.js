import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return { ...state, ...action.payload };
    },
    clearToken: (state) => {
      return { ...state, token: null };
    },
    follow(state, action) {
      //  state.user.user.following.push(action.payload)
      console.log(action.payload);
    },
    unFollow(state, action) {
      // state.user.user.following = state.user.user.following.filter(
      //   (userId) => userId !== action.payload,
      // );
      console.log(action.payload);
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, follow, unFollow } = actions;
export default reducer;
