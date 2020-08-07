import React, { useState, useEffect } from "react";
import db from "./firebase";

import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //fires once when component loads
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, likes, channel, decsription, song, messages, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              decsription={decsription}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
