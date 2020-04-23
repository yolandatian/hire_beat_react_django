import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoPreview from "./VideoPreview";

export class VideoPreviewList extends Component {
  static propTypes = {
    videoList: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="container">
        {this.props.videoList.map((v) => {
          return (
            <VideoPreview id={v.id} key={v.id} url={v.url} title={v.title} />
          );
        })}
      </div>
    );
  }
}

export default VideoPreviewList;
