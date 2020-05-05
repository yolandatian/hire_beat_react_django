import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnreviewedVideo } from "../../redux/actions/video_actions";
import PropTypes from "prop-types";
import VideoPlayer from "../videos/VideoPlayer";
import Reviews from "./Reviews";

export class ReviewWindow extends Component {
  static propTypes = {
    video: PropTypes.object,
    loaded: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getUnreviewedVideo();
  }

  render() {
    console.log(this.props.video);
    return (
      <div>
        This is review page
        {this.props.loaded ? (
          <div>
            <VideoPlayer url={this.props.video.url} />
            <Reviews videoID={this.props.video.id} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
});

export default connect(mapStateToProps, { getUnreviewedVideo })(ReviewWindow);
