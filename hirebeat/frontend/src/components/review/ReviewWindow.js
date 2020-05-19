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
    review_count: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.props.getUnreviewedVideo();
  }

  nextVideo = () => {
    this.setState({ video: null, loaded: false });
    window.location.reload();
  };

  render() {
    console.log(this.props.video);
    return (
      <div>
        This is review page. Number of videos reviewed by this reviewer:
        {this.props.review_count}
        {this.props.loaded ? (
          this.props.video.url == "" ? (
            <h2>No video needs to be reviewed</h2>
          ) : (
            <div>
              <VideoPlayer url={this.props.video.url} />
              <Reviews
                videoID={this.props.video.id}
                nextVideo={this.nextVideo}
              />
            </div>
          )
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
  review_count: state.auth_reducer.review_count,
});

export default connect(mapStateToProps, { getUnreviewedVideo })(ReviewWindow);
