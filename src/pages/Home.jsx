import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import "./profile_styles.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-8 col-lg-6 col-xl-5 p-0">
            <TweetForm />
            <Tweet />
          </div>
          <div className="col-2 col-lg-4">
            <SidebarRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
