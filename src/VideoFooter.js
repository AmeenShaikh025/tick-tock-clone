import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

import "./videoFooter.css";

function VideoFooter({ channel, decsription, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{decsription}</p>
        <div className="videFooter__ticker">
          <MusicNoteIcon className="videFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="images"
      />
    </div>
  );
}

export default VideoFooter;
