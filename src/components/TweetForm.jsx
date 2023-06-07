import TweetButton from "./TweetButton";
function TweetForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  } 
    return (
        <div className="col-10 p-0">
        <form className="d-flex flex-column" method="post" onSubmit={handleSubmit}>
          <div className="form-group flex-grow-1 p-0">
            <input
              name="content"
              className="form-control border-0"
              rows="3"
              placeholder="What's happening?"
              type="text"
            ></input>
          </div>
        <TweetButton/>
        </form>
      </div>
    )
};

export default TweetForm;