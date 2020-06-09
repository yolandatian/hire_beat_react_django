import React, { Component, Image } from "react";
import PropTypes from "prop-types";
import videoImg from "../../../assets/video.png";
import ImageButton from "../../basic/ImageButton";
import ReviewStatusButton from "./ReviewStatusButton";
import { withRouter } from "react-router-dom";

export class VideoImagePreview extends Component {
  static propTypes = {
    v: PropTypes.object.isRequired,
  };

  redirectToVideoPlayer = () => {
    const { history } = this.props;
    if (history) history.push(`/video/${this.props.v.id}`);
  };

  renderQDes = (des) => {
    var length = 65;
    if (des.length > length) {
      return des.substring(0, length) + "...";
    }
    return des;
  };

  render() {
    var badgeClassName =
      this.props.v.q_type == "Behavior Question"
        ? "badge badge-info"
        : "badge badge-dark";
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <ImageButton src={videoImg} func={this.redirectToVideoPlayer} />
            </div>
            <div className="col">
              <h3>Q:{this.renderQDes(this.props.v.q_description)}</h3>
              <h4>{this.props.v.created_at.substring(0, 10)}</h4>
              <span className={badgeClassName}>{this.props.v.q_type}</span>
              <ReviewStatusButton
                v={this.props.v}
                redirectToVideoPlayer={this.redirectToVideoPlayer}
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
