import React, { Component } from "react";
import { videoList, loadMockData } from "../../mockdata/video_data";
import VideoPreviewList from "./VideoPreviewList";

export class Videos extends Component {
  render() {
    return (
      <div>
        <h1>This is videos page</h1>
        <VideoPreviewList />
      </div>
    );
  }
}

export default Videos;
