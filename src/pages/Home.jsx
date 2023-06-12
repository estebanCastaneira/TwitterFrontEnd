import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import "./profile_styles.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTweets } from "../redux/tweetSlice";

function Home() {
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTweetsInfo() {
      try {
        if(tweets.length === 0){
          const response = await axios({
            method: "GET",
            url: `http://localhost:3000/tweets`,
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });

          dispatch(setTweets(response.data));
        }
      } catch (error) {
        console.log("Error fetching tweets:", error);
      }
    }
    getTweetsInfo();
  }, []);

  const sortedTweets = [...tweets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 col-lg-6 col-xl-5 p-0">
            <TweetForm user={user} />
            {sortedTweets.map((tweet) => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
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
