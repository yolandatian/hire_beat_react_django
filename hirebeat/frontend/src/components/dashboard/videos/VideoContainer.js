import React, { Component } from "react";
import VideoPreviewList from "./VideoPreviewList";

export class VideoContainer extends Component {
  render() {
    return (
      <div>
        <h2>Saved videos</h2>
        <VideoPreviewList />
      </div>
    );
  }
}

export default VideoContainer;
