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
      state.tweets.push(action.payload._id);
    },
    deleteTweet(state, action) {
      return state.tweets.filter((tweet) => tweet !== action.payload._id);
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, createTweet, deleteTweet } = actions;
export default reducer;
