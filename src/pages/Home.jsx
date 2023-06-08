import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import "./profile_styles.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTweets } from "../redux/tweetSlice";

function Home() {
  const [tweets, setHomeTweets] = useState(null);
  const { user, token } = useSelector((state) => state.user);

  const dispatch = useDispatch();
 
  // console.log(token);

  useEffect(() => {
    async function getTweetsInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/tweets`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      dispatch(setTweets(response.data));
      setHomeTweets(response.data);
      console.log(response.data);
    }
    getTweetsInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 col-lg-6 col-xl-5 p-0">
            <TweetForm />
            {tweets && tweets.map(tweet => 
              < Tweet key={tweet._id} tweet={tweet} />
            )}
            
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
