import TweetButton from "./TweetButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function TweetForm() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        className="container border d-flex flex-column justify-content-end p-2 pb-0"
        method="post"
        onSubmit={handleSubmit}
        style={{ height: "150px" }}
      >
        <div className="d-flex row g-0 gap-2 justify-content-between">
          <div className="col-1 align-items-start m-0">
            <Link className="text-decoration-none text-black" to={`profile/${user.username}`}>
              <img
                src=""
                className="rounded-circle"
                width="50px"
                height="50px"
                alt="avatar"
              />
            </Link>
          </div>
          <div className="form-group col-9 col-md-10">
            <input
              name="content"
              className="form-control border-0 p-2"
              rows="5"
              placeholder="What's happening?"
              type="text"
            ></input>
          </div>
        </div>
        <div className="mt-auto d-flex justify-content-end mb-2">
          <TweetButton />
        </div>
      </form>
    </div>
  );
}

export default TweetForm;
