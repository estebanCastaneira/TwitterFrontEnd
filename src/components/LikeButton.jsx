import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLikes } from "../redux/tweetSlice";
function LikeButton({ likes, tweet }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `http://localhost:3000/tweets/${tweet.id}`,
    });

    dispatch(setLikes());
  };
  const user = useSelector((state) => state.user);
  return (
    <form method="POST" onSubmit={handleSubmit}>
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
