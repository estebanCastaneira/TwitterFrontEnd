import LikeButton from "./LikeButton";
import DeleteTweet from "./DeleteTweet";
import "./tweet_styles.css";
function Tweet() {
    return(
        <div className="card-footer tweet p-0 mt-2">
            <div className="col-10 ms-3">
              <div className="text-start">
                <div className="card-body d-flex align-content-start">
                  <a className="text-decoration-none text-black" href="/{tweet.author.username}">
                    <h5 className="card-title p-0 fs-6">
                      Tweet Autor First + Tweet Autor Last
                    </h5>
                  </a>
                  <p className="card-text my-0 mx-2">
                    <small className="text-body-tertiary">Tweet Autor Username •</small>
                  </p>
                  <p className="card-text my-0"> Date
                    {/* <small className="text-body-tertiary">{ isSameDay(new Date(tweet.createdAt), new Date()) ? formatDistanceToNow(new
                      Date(tweet.createdAt), { addSuffix: true, locale: en }) : format(new
                      Date(tweet.createdAt), 'dd MMMM', { locale: en })}</small> */}
                  </p>
                </div>
              </div>
              {/* <!-- tweet header --> */}
              <div>
                <p>Tweet Content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi accusamus commodi dicta saepe dolorem aut totam est sequi numquam, eos accusantium suscipit minima similique autem itaque atque voluptas cum.</p>
              </div>
              {/* <!-- tweet text --> */}
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <LikeButton />
                </div>
                 <DeleteTweet/>
              </div>
            </div>
          </div>
    )
        
}

export default Tweet;