import { useDispatch } from "react-redux";
import { createTweet } from "../redux/tweetSlice";
import axios from "axios";

function ModalTweet({ show, handleClose }) {
  const [tweetContent, setTweetContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tweetContent) {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/tweets",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          content: tweetContent,
        },
      });
      dispatch(createTweet(response.data));
      setTweetContent("");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <form
          className="container border d-flex flex-column justify-content-end pt-2"
          method="post"
          onSubmit={handleSubmit}
          style={{ height: "150px" }}
        >
          <div className="d-flex row g-0 gap-2 justify-content-between">
            <div className="col-1 align-items-start m-0">
              <a className="text-decoration-none text-black" href="#">
                <img
                  src={user.avatar}
                  className="rounded-circle"
                  width="50px"
                  height="50px"
                  alt="avatar"
                />
              </a>
            </div>
            <div className="form-group col-9 col-md-10">
              <input
                name="content"
                className="form-control border-0 p-2"
                rows="5"
                placeholder="What are you thinking?"
                type="text"
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mt-auto d-flex justify-content-end mb-2">
            <TweetButton disabled={true} style={{ opacity: 0.6 }} />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalTweet;
