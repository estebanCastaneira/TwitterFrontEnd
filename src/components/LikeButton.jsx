import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../redux/tweetSlice";
import axios from "axios";

function LikeButton({ tweet }) {
  const userInfo = useSelector((state) => state.user);
  const user = userInfo._doc;
  const token = userInfo.token;
  const dispatch = useDispatch();

  const handleLike = async (e) => {
    console.log("handleLike");
    e.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `http://localhost:3000/tweets/${tweet._id}/like`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(toggleLike({ tweetId: tweet._id, userId: user._id }));
  };

  const isLiked = tweet.likes.some((item) => item === user._id);

  return (
    <form method="PATCH" onSubmit={handleLike}>
      <button className="likes" type="submit">
        <i className={isLiked ? "redColor bi bi-heart-fill" : "bi bi-heart"}></i>
        <p className={isLiked ? "redColor my-0 mx-2 d-inline" : "my-0 mx-2 d-inline"}>
          {tweet.likes.length}
        </p>
      </button>
    </form>
  );
}

export default LikeButton;
