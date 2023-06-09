import LikeButton from "./LikeButton";
import DeleteTweet from "./DeleteTweet";
import "./tweet_styles.css";
import { Link } from "react-router-dom";
import { format, formatDistanceToNow, isSameDay } from "date-fns";
import { enUS } from "date-fns/locale";

function Tweet({ tweet }) {
  console.log(tweet);
  return (
    <div className="card-footer tweet">
      <div className="d-flex row g-0 justify-content-between border border-top-0 p-2">
        <div className="col-2 m-0">
          <Link className="text-decoration-none text-black" to={`profile/${tweet.author.username}`}>
            <img
              src={tweet.author.avatar}
              className="rounded-circle"
              width="50px"
              height="50px"
              alt="avatar"
            />
          </Link>
        </div>
        <div className="col-9 col-md-10">
          <div className="text-start">
            <div className="card-body d-flex align-items-end mb-1">
              <Link
                className="text-decoration-none text-black"
                to={`profile/${tweet.author.username}`}
              >
                <p className="card-title p-0 fw-bold username">
                  {tweet.author.firstname} {tweet.author.lastname}
                </p>
              </Link>
              <small className="card-text tweet-text mx-1 text-body-tertiary">
                {tweet.author.username}
              </small>
              <small className="card-text  tweet-text mx-1 text-body-tertiary">•</small>
              <small className="card-text tweet-text text-body-tertiary">
                {isSameDay(new Date(tweet.createdAt), new Date())
                  ? formatDistanceToNow(new Date(tweet.createdAt), {
                      addSuffix: true,
                      locale: enUS,
                    })
                  : format(new Date(tweet.createdAt), "dd MMMM", { locale: enUS })}
              </small>
            </div>
          </div>
          {/* <!-- tweet header --> */}
          <div>
            <p className="tweet-text mb-2">{tweet.content}</p>
          </div>
          {/* <!-- tweet text --> */}
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <LikeButton tweet={tweet} likes={tweet.likes} />
            </div>
            <DeleteTweet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
