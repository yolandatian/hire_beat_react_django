import React, { Component } from "react";
import { videoList, loadMockData } from "../../mockdata/video_data";
import VideoPreviewList from "./VideoPreviewList";

export class Videos extends Component {
  state = {
    videoList: [],
  };

  componentDidMount() {
    loadMockData();
    this.setState({
      videoList: videoList,
    });
  }

  render() {
    return (
      <div>
        <h1>This is videos page</h1>
        <VideoPreviewList videoList={this.state.videoList} />
      </div>
    );
  }
}

export default Videos;
