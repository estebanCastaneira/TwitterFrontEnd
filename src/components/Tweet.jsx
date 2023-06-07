import LikeButton from "./LikeButton";
import DeleteTweet from "./DeleteTweet";
import "./tweet_styles.css";

function Tweet() {
  return (
    <div className="card-footer tweet">
      <div className="d-flex row g-0 justify-content-between border p-2">
        <div className="col-1 align-items-start m-0">
          <a className="text-decoration-none text-black" href="#">
            <img
              src="/img/foto_prueba.jpg"
              className="rounded-circle"
              width="50px"
              height="50px"
              alt="avatar"
            />
          </a>
        </div>
        <div className="col-9 col-md-10">
          <div className="text-start">
            <div className="card-body d-flex align-items-end mb-1">
              <a className="text-decoration-none text-black" href="#">
                <p className="card-title p-0 fw-bold username">FirstName LastName</p>
              </a>
              <small className="card-text tweet-text mx-1 text-body-tertiary">@Username</small>
              <small className="card-text  tweet-text mx-1 text-body-tertiary">•</small>
              <small className="card-text tweet-text text-body-tertiary">
                Date
                {/* <small className="text-body-tertiary">{ isSameDay(new Date(tweet.createdAt), new Date()) ? formatDistanceToNow(new
                      Date(tweet.createdAt), { addSuffix: true, locale: en }) : format(new
                      Date(tweet.createdAt), 'dd MMMM', { locale: en })}</small> */}
              </small>
            </div>
          </div>
          {/* <!-- tweet header --> */}
          <div>
            <p className="tweet-text mb-2">
              Tweet Content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi
              accusamus commodi dicta saepe dolorem aut totam est sequi numquam, eos accusantium
              suscipit minima similique autem itaque atque voluptas cum.
            </p>
          </div>
          {/* <!-- tweet text --> */}
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <LikeButton />
            </div>
            <DeleteTweet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
