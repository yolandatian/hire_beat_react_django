import React, { Component, Image } from "react";
import PropTypes from "prop-types";
import videoImg from "../../assets/video.png";
import ImageButton from "../basic/ImageButton";
import { withRouter } from "react-router-dom";

export class VideoPreview extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  redirectToVideoPlayer = () => {
    const { history } = this.props;
    if (history) history.push(`/video/${this.props.id}`);
  };

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <h2>{this.props.url}</h2>
        <ImageButton src={videoImg} func={this.redirectToVideoPlayer} />
      </div>
    );
  }
}

export default withRouter(VideoPreview);
