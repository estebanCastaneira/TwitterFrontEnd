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
    setLikes(state, action) {
      console.log(" ");
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { setTweets, setLikes, resetTweets } = actions;
export default reducer;
