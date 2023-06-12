import "./tweet_button_styles.css";

function TweetButton({ disabled }) {
  const buttonClass = disabled ? "tweetButton disabledButton" : "tweetButton";

  return (
    <>
      <button type="submit" className={buttonClass} disabled={disabled}>
        Tweet
      </button>
    </>
  );
}

export default TweetButton;
