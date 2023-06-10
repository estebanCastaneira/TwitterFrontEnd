import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    clearToken: (state) => {
      return null;
    },
    createTweet(state, action) {
      state._doc.tweets.push(action.payload._id);
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, createTweet } = actions;
export default reducer;
