import { Link } from "react-router-dom";
import { useState } from "react";
import { clearToken } from "../redux/userSlice";
import { resetTweets } from "../redux/tweetSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TweetButton from "./TweetButton";
import "./tweet_button_styles.css";
import axios from "axios";
import { createTweet } from "../redux/userSlice";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [tweetContent, setTweetContent] = useState("");
  const user = useSelector((state) => state.user);
 

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(tweetContent){
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/tweets",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data:{
          content: tweetContent,
        }
      }) 
      dispatch(createTweet(response.data));
      handleClose();
      setTweetContent("")
    }  
  };
  const isProfilePage = location.pathname === `/profile/${user.username}`;
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogout() {
    dispatch(clearToken());
    dispatch(resetTweets());
  }

  return (
    <div className="sticky-top">
      <aside id="leftSidebar" className=" d-flex justify-content-center align-items-start w-100">
        <div className="text-end text-lg-start mt-4">
          <Link className="btn mb-4 p-0" to="/" role="button">
            <img src="/public/img/icons/twitter-logo.svg" alt="tweet" />
          </Link>

          <Link
            className="btn mb-4 p-0 border-0 d-block text-end text-lg-start"
            to="/"
            role="button"
          >
            <div className="me-1 d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/home.svg" alt="Home Icon" style={{ height: "21px" }} />
            </div>
            <p className="d-none d-lg-inline ms-2">Home</p>
          </Link>

          <Link
            className="btn mb-4 p-0 border-0 d-block text-lg-start"
            to={isProfilePage ? "#" : `profile/${user.username}`}
          >
            <div className=" d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/profile.svg" alt="Profile Icon" style={{ height: "21px" }} />
            </div>
            <p className="d-none d-lg-inline ms-2">Profile</p>
          </Link>

          <Button
            className="tweetButton btn mb-1 px-3 w-100 d-none d-lg-inline-block"
            onClick={handleShow}
            role="button"
          >
            Tweet
          </Button>
          <Button
            id="sidebarIconTweet"
            className="rounded-circle p-2 d-lg-none mb-3"
            onClick={handleShow}
            role="button"
          >
            <img src="/icons/write.svg" style={{ height: "21px" }} />
          </Button>
          <Link
            id="sidebarIconLogout"
            className="rounded-circle p-2 d-lg-none d-flex aling-self-end "
            to="/login"
            role="button"
            onClick={handleLogout}
          >
            <img src="/icons/logout.svg" style={{ height: "23px" }} />
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
                    value={tweetContent}
                    onChange={(e)=> setTweetContent(e.target.value)}
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
