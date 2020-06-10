import React from "react";
import videoImg from "../../../assets/video.png";
import ImageButton from "../../basic/ImageButton";
import ReviewStatusButton from "./ReviewStatusButton";
import { renderQDes } from "../DashboardComponents";

export function VideoImagePreview(props) {
  // control status, render modal
  return (
    <div className="height-200">
      <div className="row">
        <div className="col-5">
          <ImageButton src={videoImg} func={() => {}} />
        </div>
        <div className="col d-flex flex-column justify-content-start container">
          <h3 className="height-50">Q:{renderQDes(props.v.q_description)}</h3>
          <div className="d-flex justify-content-start">
            <p className="text-secondary">{props.v.q_type}</p>
            <p
              className="text-secondary"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              {" | "}
            </p>
            <p className="text-secondary">
              {props.v.created_at.substring(0, 10)}
            </p>
          </div>
          <ReviewStatusButton
            v={props.v}
            sendVideoForReview={props.sendVideoForReview}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoImagePreview;
