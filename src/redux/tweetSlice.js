import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
        return action.payload
    },
    setLikes(state, action) {
      console.log("llegamos hasta acá")
    }
  },
});

const { actions, reducer } = tweetSlice;
export const { setTweets, setLikes } = actions;
export default reducer;
