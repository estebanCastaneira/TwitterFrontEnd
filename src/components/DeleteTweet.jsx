import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../redux/tweetSlice";

function DeleteTweet({ tweet }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_URL_BACK}/tweets/${tweet._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(deleteTweet(tweet._id));
  };
  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <button className="delete">
          <i className="redColor bi bi-trash-fill"></i>
        </button>
      </form>
    </div>
  );
}

export default DeleteTweet;
