import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
{
  /* login
    register */
}

{
  /* home */
}

{
  /* profile */
}

//
import Following from "./pages/Following";
import Followers from "./pages/Followers";
//

{
  /* 404 */
}

{
  /* tweet
    tweetform */
}

{
  /* navBar
    sidebar */
}

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
      </Routes>
      {/* home */}

      {/* profile */}

      <Following />
      <Followers />
      {/* 404 */}

      {/* tweet
    tweetform */}

      {/* navBar
    sidebar */}
    </>
  );
}

export default App;
