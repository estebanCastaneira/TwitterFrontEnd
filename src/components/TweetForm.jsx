import TweetButton from "./TweetButton";

function TweetForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
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
                src="/img/foto_prueba.jpg"
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
