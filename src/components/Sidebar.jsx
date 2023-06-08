import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TweetButton from "./TweetButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const {user} = useSelector(state => state.user)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            onClick={()=> navigate(`profile/${user.username}`)}
            role="button"
          >
            <div className="me-1 d-inline-block" style={{ width: "23px" }}>
              <img src="/img/icons/profile.svg" alt="Profile Icon" style={{ height: "21px" }} />
            </div>
            <p className="d-none d-lg-inline">Profile</p>
          </Link>

          <Button
            variant="primary"
            className="btn btn-primary mt-1 rounded-pill px-3 w-100 fw-semibold d-none d-lg-inline-block"
            onClick={handleShow}
          >
            Tweet
          </Button>

          <Link
            id="sidebarIconLogout"
            className="rounded-circle p-2 d-lg-none d-flex aling-self-end "
            to="#"
            role="button"
          >
            <img src="../img/icons/logout.svg" style={{ height: "21px" }} />
          </Link>
          <Link
            className="btn btn-danger mt-1 rounded-pill px-3 w-100 fw-semibold d-none d-lg-inline-block"
            to="#"
            role="button"
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
