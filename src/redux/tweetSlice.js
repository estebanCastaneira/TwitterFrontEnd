import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    setTweets(state, action) {
      return [ ...state, ...action.payload ];
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken } = actions;
export default reducer;