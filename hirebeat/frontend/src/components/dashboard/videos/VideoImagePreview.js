import React, { Component, Image } from "react";
import PropTypes from "prop-types";
import videoImg from "../../../assets/video.png";
import ImageButton from "../../basic/ImageButton";
import ReviewStatusButton from "./ReviewStatusButton";
import { renderQDes } from "../DashboardComponents";
import { withRouter } from "react-router-dom";

export class VideoImagePreview extends Component {
  static propTypes = {
    v: PropTypes.object.isRequired,
  };

  redirectToVideoPlayer = () => {
    const { history } = this.props;
    if (history) history.push(`/video/${this.props.v.id}`);
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
              <h3>Q:{renderQDes(this.props.v.q_description)}</h3>
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
                // see review func
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
