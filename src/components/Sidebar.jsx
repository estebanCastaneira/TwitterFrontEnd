import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <aside
        id="leftSidebar"
        className="d-flex flex-column justify-content-between me-4 mb-4 ms-0 w-20 h-100"
      >
        <div className="text-end text-lg-start mt-4">
          <Link className="btn mb-4 p-0" to="#" role="button">
            <img src="/public/img/icons/twitter-logo.svg" alt="" />
          </Link>

          <Link
            className="btn mb-4 p-0 border-0 d-block text-end text-lg-start"
            to="/"
            role="button"
          >
            <div className="me-1 d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/home.svg" alt="Home Icon" style={{ height: "21px" }} />
            </div>
            <p className="d-none d-lg-inline">Home</p>
          </Link>

          <Link
            className="btn mb-4 p-0 border-0 d-block text-end text-lg-start"
            to="#"
            role="button"
          >
            <div className="me-1 d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/profile.svg" alt="Profile Icon" style={{ height: "21px" }} />
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
              <img src="../img/icons/write.svg" style={{ height: "21px" }} />
            </Link>
          </div>
        </div>
        <div className="text-end text-lg-start">
          <Link
            className="btn btn-danger mt-1 rounded-pill px-3 w-100 fw-semibold d-none d-lg-inline-block"
            to="#"
            role="button"
          >
            Logout
          </Link>
          <Link
            id="sidebarIconLogout"
            className="rounded-circle p-2 d-lg-none"
            to="#"
            role="button"
          >
            <img src="../img/icons/logout.svg" style={{ height: "21px" }} />
          </Link>
        </div>
      </aside>
      ;
    </div>
  );
}

export default Sidebar;
