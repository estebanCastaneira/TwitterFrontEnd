import { Link } from "react-router-dom";
import { useState } from "react";
import { clearToken } from "../redux/userSlice";
import { resetTweets, createTweet } from "../redux/tweetSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import TweetButton from "./TweetButton";
import "./tweet_button_styles.css";
import axios from "axios";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [tweetContent, setTweetContent] = useState("");
  const user = useSelector((state) => state.user._doc);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tweetContent) {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_URL_BACK}/tweets`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          content: tweetContent,
        },
      });
      handleClose();
      setTweetContent("");
      dispatch(createTweet(response.data));
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
      <aside
        id="leftSidebar"
        className=" d-flex justify-content-center justify-content-xl-start align-items-start w-100 h-100"
      >
        <div className="mt-4 m-0">
          <Link className="btn mb-4 p-0 ps-1  sidebar_button" to="/" role="button">
            <img src="/img/icons/twitter-logo.svg" alt="tweet" />
          </Link>

          <Link
            className="btn mb-4 p-0 ps-1  border-0 d-block text-center text-lg-start sidebar_button"
            to="/"
            role="button"
          >
            <div className="me-1 d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/home.svg" alt="Home Icon" style={{ height: "21px" }} />
            </div>
            <p className="d-none d-xl-inline ms-2">Home</p>
          </Link>
          {user && (
            <Link
              className="btn mb-4 p-0 ps-lg-2 border-0 d-block text-center text-lg-start sidebar_button"
              to={isProfilePage ? "#" : `/profile/${user.username}`}
              role="button"
            >
              <div className=" d-inline-block" style={{ width: "23px" }}>
                <img src="/img/icons/profile.svg" alt="Profile Icon" style={{ height: "21px" }} />
              </div>
              <p className="d-none d-xl-inline ms-2">Profile</p>
            </Link>
          )}
        </div>
        <Button
          className="tweetButton mb-1 px-3 d-none d-xl-inline-block w-100 mt-auto position-absolute"
          onClick={handleShow}
          role="button"
          style={{ top: "170px" }}
        >
          Tweet
        </Button>
        <Button
          id="sidebarIconTweet"
          className="rounded-circle p-2 d-xl-none sidebar_button mt-auto position-absolute "
          onClick={handleShow}
          role="button"
          style={{ top: "170px" }}
        >
          <img src="/icons/write.svg" style={{ height: "21px" }} />
        </Button>
        <Link
          id="logoutButton"
          className="btn mt-1 rounded-pill w-100 fw-semibold d-none d-xl-inline-block mt-auto position-absolute bottom-0"
          to="/"
          role="button"
          onClick={handleLogout}
        >
          Logout
        </Link>
        <Link
          id="sidebarIconLogout"
          className="rounded-circle p-2 d-xl-none sidebar_button mt-auto position-absolute bottom-0"
          to="/"
          role="button"
          onClick={handleLogout}
        >
          <img src="/icons/logout.svg" style={{ height: "23px" }} />
        </Link>

        {/* <!-- MODAL TWEET --> */}

        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header className="border-0 p-3 pb-2" closeButton></Modal.Header>
          <Modal.Body className="p-0">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row className="d-flex justify-content-start gap-4 ms-0 p-0">
                  <Col xs={1}>
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Col>
                  <Col xs={10}>
                    <Form.Control
                      className="border-0"
                      as="textarea"
                      rows={5}
                      name="content"
                      placeholder="What are you thinking?"
                      type="text"
                      value={tweetContent}
                      onChange={(e) => setTweetContent(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Modal.Footer className="p-2 border-0">
                <div className="button-column">
                  <TweetButton onClick={handleClose} />
                </div>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </aside>
    </div>
  );
}

export default Sidebar;
