import LikeButton from "./LikeButton";
import DeleteTweet from "./DeleteTweet";

function Tweet() {
    return(
        <div className="card-footer tweet p-0 mt-2">
            <div className="col-10 ms-3">
              <div className="text-start">
                <div className="card-body d-flex align-content-start">
                  <a className="text-decoration-none text-black" href="/{tweet.author.username}">
                    <h5 className="card-title p-0 fs-6">
                      {tweet.author.firstname} {tweet.author.lastname}
                    </h5>
                  </a>
                  <p className="card-text my-0 mx-2">
                    <small className="text-body-tertiary">{ tweet.author.username} •</small>
                  </p>
                  <p className="card-text my-0">
                    <small className="text-body-tertiary"
                      >{ isSameDay(new Date(tweet.createdAt), new Date()) ? formatDistanceToNow(new
                      Date(tweet.createdAt), { addSuffix: true, locale: en }) : format(new
                      Date(tweet.createdAt), 'dd MMMM', { locale: en })}</small
                    >
                  </p>
                </div>
              </div>
              {/* <!-- tweet header --> */}
              <div>
                <p>{ tweet.content }</p>
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