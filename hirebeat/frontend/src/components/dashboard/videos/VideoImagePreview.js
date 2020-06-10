import React, { Component, Image } from "react";
import PropTypes from "prop-types";
import videoImg from "../../../assets/video.png";
import ImageButton from "../../basic/ImageButton";
import ReviewStatusButton from "./ReviewStatusButton";
import { renderQDes } from "../DashboardComponents";
import { withRouter } from "react-router-dom";

export class VideoImagePreview extends Component {
  // control status, render modal
  static propTypes = {
    v: PropTypes.object.isRequired,
  };

  redirectToVideoPlayer = () => {
    const { history } = this.props;
    if (history) history.push(`/video/${this.props.v.id}`);
  };

  render() {
    return (
      <div className="height-200">
        <div className="row">
          <div className="col-5">
            <ImageButton src={videoImg} func={this.redirectToVideoPlayer} />
          </div>
          <div className="col d-flex flex-column justify-content-start container">
            <h3 className="height-50">
              Q:{renderQDes(this.props.v.q_description)}
            </h3>
            <div className="d-flex justify-content-start">
              <p className="text-secondary">{this.props.v.q_type}</p>
              <p
                className="text-secondary"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                {" | "}
              </p>
              <p className="text-secondary">
                {this.props.v.created_at.substring(0, 10)}
              </p>
            </div>
            <ReviewStatusButton
              v={this.props.v}
              sendVideoForReview={this.props.sendVideoForReview}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoImagePreview);
