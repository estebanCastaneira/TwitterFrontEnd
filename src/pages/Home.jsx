import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import "./profile_styles.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const [tweets, setTweets] = useState(null);
  const { user, token } = useSelector((state) => state.user);
  console.log(user);
  console.log(token);

  useEffect(() => {
    async function getTweetsInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/tweets`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTweets(response.data);
      console.log(response.data);
    }
    getTweetsInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 col-lg-6 col-xl-5 p-0">
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
