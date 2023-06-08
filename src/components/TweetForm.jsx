import TweetButton from "./TweetButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TweetForm({ user }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 class="fs-4 my-3">Home</h2>

      <div className="border d-flex flex-row justify-content-between p-2 pb-0">
        <Link className="text-decoration-none text-black col-2" to="/">
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
            style={{ height: "150px" }}
          >
            <div className="form-group p-0">
              <input
                name="content"
                className="form-control border-0"
                rows="5"
                placeholder="What's happening?"
                type="text"
              ></input>
            </div>
            <div className="form-group align-self-end mt-auto mb-2 ">
              <TweetButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TweetForm;
