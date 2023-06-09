import "./Error404_styles.css";

function Error404() {
  return (
    <div className="container error-container">
      <div className="d-flex row justify-content-center align-items-center error-row">
        <div className="col text-center">
          <img className="icon_404" src="/icons/twitter_404.svg" alt="Twitter error" />
          <h1 className="error-title">OOPS!</h1>
          <h3 className="error-subtitle">Page not found</h3>
          <p className="error-text">
            The page you are looking for doesn't exist or another error ocurred.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error404;
