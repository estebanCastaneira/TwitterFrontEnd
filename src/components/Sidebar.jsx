import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { clearToken } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TweetButton from "./TweetButton";
import { useSelector } from "react-redux";
import "./tweet_button_styles.css"

function Sidebar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogout() {
    dispatch(clearToken());
  }

  return (
    <div>
      <aside
        id="leftSidebar"
        className="d-flex flex-column justify-content-between me-4 mb-4 ms-0 w-20 h-100"
      >
        <div className="text-end text-lg-start mt-4">
          <Link className="btn mb-4 p-0" to="/" role="button">
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
            onClick={() => navigate(`profile/${user.username}`)}
            role="button"
          >
            <div className="me-1 d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/profile.svg" alt="Profile Icon" style={{ height: "21px" }} />
            </div>
            <p className="d-none d-lg-inline">Profile</p>
          </Link>

          <Button
            id="tweetButton"
            className="btn mb-1 rounded-pill px-3 w-100 fw-semibold d-none d-lg-inline-block"
            onClick={handleShow}
          >
            Tweet
          </Button>
          <Button  id="sidebarIconTweet" className="rounded-circle p-2 d-lg-none" href="#" role="button">
          
            <img src="/icons/write.svg" style={{height: "21px"}} />
    
          </Button>
          <Link
            id="sidebarIconLogout"
            className="rounded-circle p-2 d-lg-none d-flex aling-self-end "
            to="#"
            role="button"
          >
            <img src="/icons/logout.svg" style={{ height: "21px" }} />
          </Link>
          <Link
            id="logoutButton"
            className="btn mt-1 rounded-pill px-3 w-100 fw-semibold d-none d-lg-inline-block"
            to="/login"
            role="button"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>

        {/* <!-- MODAL TWEET --> */}

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
                  ></input>
                </div>
              </div>
              <div className="mt-auto d-flex justify-content-end mb-2">
                <TweetButton />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </aside>
    </div>
  );
}

export default Sidebar;
