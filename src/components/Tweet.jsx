import LikeButton from "./LikeButton";
import DeleteTweet from "./DeleteTweet";
import "./tweet_styles.css";
import { Link } from "react-router-dom";
import { format, formatDistanceToNow, isSameDay } from "date-fns";
import { enUS } from "date-fns/locale";
import { useSelector } from "react-redux";

function Tweet({ tweet }) {
  const user = useSelector((state) => state.user._doc);
  const isProfilePage = location.pathname === `/profile/${tweet.author.username}`;
  return (
    <div className="card-footer tweet">
      <div className="d-flex row g-0 justify-content-between border border-top-0 p-2">
        <div className="col-1 m-0 ms-1">
          <Link
            className="text-decoration-none text-black"
            to={isProfilePage ? "#" : `profile/${tweet.author.username}`}
          >
            <img
              src={tweet.author.avatar}
              className="rounded-circle"
              width="50px"
              height="50px"
              alt="avatar"
            />
          </Link>
        </div>
        <div className="col-10">
          <div className="text-start">
            <div className="card-body d-flex align-items-end mb-1 gap-1">
              <Link
                className="text-decoration-none text-black"
                to={isProfilePage ? "#" : `profile/${tweet.author.username}`}
              >
                <p className="card-title p-0 fw-bold username">
                  {tweet.author.firstname} {tweet.author.lastname}
                </p>
              </Link>
              <small className="card-text tweet-text text-body-tertiary">
                {tweet.author.username}
              </small>
              <small className="card-text  tweet-text text-body-tertiary">•</small>
              <small className="card-text tweet-text text-body-tertiary">
                {isSameDay(new Date(tweet.createdAt), new Date())
                  ? formatDistanceToNow(new Date(tweet.createdAt), {
                      addSuffix: true,
                      locale: enUS,
                    })
                  : format(new Date(tweet.createdAt), "MMM do", { locale: enUS })}
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
              <LikeButton key={tweet.id} tweet={tweet} />
            </div>
            {user.username === tweet.author.username && (
              <DeleteTweet key={tweet.id} tweet={tweet} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
