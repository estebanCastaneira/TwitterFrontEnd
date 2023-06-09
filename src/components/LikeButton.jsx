import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLikes } from "../redux/tweetSlice";
import axios from "axios";

function LikeButton({ likes, tweet }) {
  const dispatch = useDispatch();
  console.log(likes);
  const { user, token } = useSelector((state) => state.user);

  console.log(user);

  const handleLike = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: "PATCH",
      url: `http://localhost:3000/tweets/${tweet._id}/like`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setLikes());
  };
  return (
    <form method="PATCH" onSubmit={handleLike}>
      <button className="likes" type="submit">
        <i className={likes.includes(user.id) ? "redColor bi bi-heart-fill" : "bi bi-heart"}></i>
        <p
          className={likes.includes(user.id) ? "redColor my-0 mx-2 d-inline" : "my-0 mx-2 d-inline"}
        >
          {likes.length}
        </p>
      </button>
    </form>
  );
}

export default LikeButton;
