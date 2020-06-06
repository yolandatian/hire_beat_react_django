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

  renderQuestionDescription = (des) => {
    if (des.length > 50) {
      return des.substring(0, 65) + "...";
    }
    return des;
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <ImageButton src={videoImg} func={this.redirectToVideoPlayer} />
            </div>
            <div className="col">
              <h3>Q:{this.renderQuestionDescription(this.props.des)}</h3>
              <h4>{this.props.date.substring(0, 10)}</h4>
              <ReviewStatusButton
                redirectToVideoPlayer={this.redirectToVideoPlayer}
                needed_expert_review={this.props.needed_expert_review}
                is_expert_reviewed={this.props.is_expert_reviewed}
                sendVideoForReview={this.props.sendVideoForReview}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoImagePreview);
