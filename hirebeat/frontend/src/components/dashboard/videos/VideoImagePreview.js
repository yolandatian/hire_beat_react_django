import React, { Component, Image } from "react";
import PropTypes from "prop-types";
import videoImg from "../../../assets/video.png";
import ImageButton from "../../basic/ImageButton";
import ReviewStatusButton from "./ReviewStatusButton";
import { withRouter } from "react-router-dom";

export class VideoImagePreview extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };

  redirectToVideoPlayer = () => {
    const { history } = this.props;
    if (history) history.push(`/video/${this.props.id}`);
  };

  render() {
    return (
      <div className="container">
        <h2>{this.props.date.substring(0, 10)}</h2>
        <ImageButton src={videoImg} func={this.redirectToVideoPlayer} />
        <ReviewStatusButton
          redirectToVideoPlayer={this.redirectToVideoPlayer}
          needed_expert_review={this.props.needed_expert_review}
          is_expert_reviewed={this.props.is_expert_reviewed}
          sendVideoForReview={this.props.sendVideoForReview}
        />
      </div>
    );
  }
}

export default withRouter(VideoImagePreview);
