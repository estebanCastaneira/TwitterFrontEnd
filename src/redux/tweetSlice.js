import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    setTweets(state, action) {
        state.push(...action.payload)
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { setTweets } = actions;
export default reducer;
