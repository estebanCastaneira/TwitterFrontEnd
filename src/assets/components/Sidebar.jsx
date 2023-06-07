import { Link } from "react-router-dom";

function Sidebar() {
  <div>
    <aside
      id="leftSidebar"
      className="d-flex flex-column justify-content-between me-4 mb-4 ms-0 w-20 h-100"
    >
      <div className="text-end text-lg-start mt-4">
        <Link className="btn mb-4 p-0" to="#" role="button">
          <img src="/img/icons/twitter-logo.svg" alt="" />
        </Link>

        <Link
          className="btn mb-4 p-0 border-0 d-block text-end text-lg-start"
          to="/"
          role="button"
        >
          <div className="me-1 d-inline-block" style="width: 23px">
            <img
              src="/img/icons/home.svg"
              alt="Home Icon"
              style="height: 21px"
            />
          </div>
          <p className="d-none d-lg-inline">Home</p>
        </Link>

        <Link
          className="btn mb-4 p-0 border-0 d-block text-end text-lg-start"
          to="/<%= locals.user.username %>"
          role="button"
        >
          <div className="me-1 d-inline-block" style="width: 23px">
            <img
              src="/img/icons/profile.svg"
              alt="Profile Icon"
              style="height: 21px"
            />
          </div>
          <p className="d-none d-lg-inline">Profile</p>
        </Link>

        <div className="text-end text-lg-start">
          <Link
            id="sidebarTweet"
            className="btn m-0 rounded-pill pl-3 w-100 fw-semibold text-center d-none d-lg-inline-block"
            to="#"
            role="button"
          >
            Tweet
          </Link>
          <Link
            id="sidebarIconTweet"
            className="rounded-circle p-2 d-lg-none"
            to="#"
            role="button"
          >
            <img src="../img/icons/write.svg" style="height: 21px" />
          </Link>
        </div>
      </div>

      {/* - MODAL TWEET - */}
      {/* <div id="myModal" className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <button
              id="closeButton"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="row mt-4">
            <div className="col-sm-2">
              <img
                src="<%=locals.user.avatar%>"
                className="img-fluid rounded-circle w-100 mb-2"
                alt="avatar"
              />
            </div>
            <div className="col-sm-10 p-0">
              <form
                className="d-flex flex-column h-100"
                method="post"
                action="/tweetStore"
              >
                <div className="form-group flex-grow-1 p-0 modal-textarea-container">
                  <input
                    className="form-control border-0 modal-textarea"
                    name="content"
                    rows="3"
                    placeholder="What's happening?"
                  ></input>
                </div>
                <div className="form-group mt-auto text-end">
                  <button
                    id="tweetButton"
                    type="submit"
                    className="btn btn-sm align-self-end"
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="text-end text-lg-start">
        <Link
          className="btn btn-danger mt-1 rounded-pill px-3 w-100 fw-semibold d-none d-lg-inline-block"
          to="/logout"
          role="button"
        >
          Logout
        </Link>
        <Link
          id="sidebarIconLogout"
          className="rounded-circle p-2 d-lg-none"
          to="/logout"
          role="button"
        >
          <img src="../img/icons/logout.svg" style="height: 21px" />
        </Link>
      </div>
    </aside>
    ;
  </div>;
}

export default Sidebar;
