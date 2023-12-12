import TweetButton from "./TweetButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createTweet } from "../redux/tweetSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function TweetForm() {
  const [tweetContent, setTweetContent] = useState("");
  const user = useSelector((state) => state.user._doc);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tweetContent) {
      setTweetContent("");
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_URL_BACK}/tweets`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          content: tweetContent,
        },
      });

      dispatch(createTweet(response.data));
    }
  };

  return (
    <div className="border">
      <div className="d-flex flex-row p-2 ps-3 pb-0 mb-3">
        <h5>Home</h5>
      </div>
      <div className="d-flex flex-row justify-content-between p-2 pb-0">
        <Link
          className="text-decoration-none text-black col-2 ps-1"
          to={`/profile/${user.username}`}
        >
          <img
            src={user && user.avatar}
            className="rounded-circle"
            width="50px"
            height="50px"
            alt="avatar"
          />
        </Link>
        <div className="col-10 p-0">
          <form
            className="d-flex flex-column"
            method="post"
            onSubmit={handleSubmit}
            style={{ height: "100px" }}
          >
            <div className="form-group p-0">
              <input
                name="content"
                className="form-control border-0"
                rows="5"
                placeholder="What's happening?"
                type="text"
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
              ></input>
            </div>
            <div className="align-self-end mt-auto mb-2 button-column">
              <TweetButton disabled={!tweetContent.trim()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TweetForm;
