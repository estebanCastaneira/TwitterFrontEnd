import { Link } from "react-router-dom";

function SidebarRight() {
  return (
    <div className="row sticky-top">
      <aside className="d-none d-lg-block">
        <div className="bg-body-tertiary rounded p-3">
          <h3 className="mb-3 fs-5"> What´s happening</h3>
          <div className="lh-sm">
            <small className="m-0 text-secondary">Programin • Trending</small>
            <h4 className="m-0 fs-6">#MongoVsSequelize</h4>
            <small className="m-0 text-secondary">97.5K Tweets</small>
          </div>
          <div className="lh-sm my-3">
            <small className="m-0 text-secondary">Entertainment • Trending</small>
            <h4 className="m-0 fs-6">#StarWars</h4>
            <small className="m-0 text-secondary">97.5K Tweets</small>
          </div>
          <div className="lh-sm">
            <small className="m-0 text-secondary">News • Trending</small>
            <h4 className="m-0 fs-6">#LifeInMars</h4>
            <small className="m-0 text-secondary">97.5K Tweets</small>
          </div>
        </div>

        <div className="bg-body-tertiary rounded p-3 my-3">
          <h3 className="mb-3 fs-5">Who to follow</h3>
          <div className="card-footer">
            <div className="row mb-3 g-0">
              <div className="col-2">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src="/img/hack_academy.png"
                    className="img-fluid rounded-circle w-75 mb-2"
                    alt="hack_academy"
                  />
                </div>
              </div>
              <div className=" col-4 col-md-6 text-start">
                <div className="card-body">
                  <h5 className="card-title mb-0 p-0 fs-6">Hack Academy</h5>
                  <p className="card-text">
                    <small className="text-body-tertiary">@Hack Academy</small>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end">
                  <Link
                    className="btn mt-1 rounded-pill px-3 fw-bold followBtn"
                    to="#"
                    role="button"
                  >
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            {/* - Termina row - */}
            <div className="row mb-3 g-0">
              <div className="col-2">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src="/img/javascript.png"
                    className="img-fluid rounded-circle w-75 mb-2"
                    alt="javascript"
                  />
                </div>
              </div>
              <div className="col-6 text-start">
                <div className="card-body">
                  <h5 className="card-title mb-0 p-0 fs-6">JavaScript</h5>
                  <p className="card-text">
                    <small className="text-body-tertiary">@JavaScript</small>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end">
                  <Link
                    className="btn mt-1 rounded-pill px-3 fw-bold followBtn"
                    to="#"
                    role="button"
                  >
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            {/* - Termina row - */}
            <div className="row mb-3 g-0">
              <div className="col-2">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src="/img/MongoDB.png"
                    className="img-fluid rounded-circle w-75 mb-2"
                    alt="MongoDB"
                  />
                </div>
              </div>
              <div className="col-6 text-start">
                <div className="card-body">
                  <h5 className="card-title mb-0 p-0 fs-6">MongoDb</h5>
                  <p className="card-text">
                    <small className="text-body-tertiary">@MongoDb</small>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end">
                  <Link
                    className="btn mt-1 rounded-pill px-3 fw-bold followBtn"
                    to="#"
                    role="button"
                  >
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            {/* - Termina row - */}
            <div className="row mb-3 g-0">
              <div className="col-2">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src="/img/node.png"
                    className="img-fluid rounded-circle w-75 mb-2"
                    alt="NodeJs"
                  />
                </div>
              </div>
              <div className="col-6 text-start">
                <div className="card-body">
                  <h5 className="card-title mb-0 p-0 fs-6">Node.js</h5>
                  <p className="card-text">
                    <small className="text-body-tertiary">@nodejs</small>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end">
                  <Link
                    className="btn mt-1 rounded-pill px-3 fw-bold followBtn"
                    to="#"
                    role="button"
                  >
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            {/* - Termina row - */}
            <div className="row mb-3 g-0">
              <div className="col-2">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src="/img/mdn.png"
                    className="img-fluid rounded-circle w-75 mb-2"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="col-6 text-start">
                <div className="card-body">
                  <h5 className="card-title mb-0 p-0 fs-6">MDN Web Docs</h5>
                  <p className="card-text">
                    <small className="text-body-tertiary">@MozDevNet</small>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end">
                  <Link
                    className="btn mt-1 rounded-pill px-3 fw-bold followBtn"
                    to="#"
                    role="button"
                  >
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            {/* - Termina row - */}
          </div>
          {/* - Termina card-footer - */}
        </div>
      </aside>
    </div>
  );
}

export default SidebarRight;
