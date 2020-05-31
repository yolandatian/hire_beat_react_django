import React, { Component } from "react";
import VideoPreviewList from "./VideoPreviewList";

export class VideoContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is videos page</h1>
        <VideoPreviewList />
      </div>
    );
  }
}

export default VideoContainer;
