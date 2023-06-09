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
    createTweet(state, action) {
      state.tweets.push(action.payload._id);
    },
    deleteTweet(state, action) {
      return state.tweets.filter((tweet) => tweet !== action.payload._id);
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, follow, unFollow, createTweet, deleteTweet } = actions;
export default reducer;
