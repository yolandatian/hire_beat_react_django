import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoPreview from "./VideoPreview";
import { connect } from "react-redux";
import { getVideos, deleteVideo } from "../../actions/video_actions";

export class VideoPreviewList extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <div className="container">
        {this.props.videos.map((v) => {
          return (
            <VideoPreview id={v.id} key={v.id} url={v.url} title={v.title} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // map initial state to props of this video component
  videos: state.video_reducer.videos,
});

export default connect(mapStateToProps, { getVideos, deleteVideo })(
  VideoPreviewList
);
