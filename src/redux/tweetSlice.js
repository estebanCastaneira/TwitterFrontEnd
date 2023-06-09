import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    resetTweets(state) {
      return [];
    },
    toggleLike(state, action) {
      const tweet = state.find((item) => item._id === action.payload.tweetId);
      tweet.likes.some((item) => item === action.payload.userId)
        ? (tweet.likes = tweet.likes.filter((item) => item !== action.payload.userId))
        : tweet.likes.push(action.payload.userId);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { setTweets, resetTweets, toggleLike } = actions;
export default reducer;
