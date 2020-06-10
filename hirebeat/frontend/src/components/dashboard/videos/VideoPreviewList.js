import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoImagePreview from "./VideoImagePreview";
import { connect } from "react-redux";
import {
  getVideos,
  sendVideoForReview,
} from "../../../redux/actions/video_actions";

export class VideoPreviewList extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getVideos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <div className="container">
        <p className="light-grey">Saved videos</p>
        {this.props.loaded
          ? this.props.videos.map((v) => {
              return (
                <div key={v.id}>
                  <VideoImagePreview
                    v={v}
                    key={v.id}
                    sendVideoForReview={this.props.sendVideoForReview}
                  />
                  <br />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
});

export default connect(mapStateToProps, {
  getVideos,
  sendVideoForReview,
})(VideoPreviewList);
