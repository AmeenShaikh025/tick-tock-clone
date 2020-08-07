import React, { useRef, useState } from "react";

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./video.css";

function Video({ url, channel, decsription, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
      ></video>
      <VideoFooter channel={channel} decsription={decsription} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
