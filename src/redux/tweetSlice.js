import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    setNewTweets(state, action) {
      const user = action.payload;
      const tweetsToCompare = action.payload.tweets.map((tweet) => {
        return {
          ...tweet,
          author: {
            id: user.id,
            fistname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            avatar: user.avatar,
          },
        };
      });
      const newTweets = tweetsToCompare.filter(
        (newTweet) => !state.some((tweet) => tweet.author.username === newTweet.author.username),
      );
      state.push(...newTweets);
    },
    resetTweets() {
      return [];
    },
    toggleLike(state, action) {
      const tweet = state.find((item) => item._id === action.payload.tweetId);
      tweet.likes.some((item) => item === action.payload.userId)
        ? (tweet.likes = tweet.likes.filter((item) => item !== action.payload.userId))
        : tweet.likes.push(action.payload.userId);
    },
    createTweet(state, action) {
      state.push(action.payload);
    },
    deleteTweet(state, action) {
      return state.filter((tweet) => tweet._id !== action.payload);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { setTweets, resetTweets, toggleLike, createTweet, deleteTweet, setNewTweets } =
  actions;
export default reducer;
