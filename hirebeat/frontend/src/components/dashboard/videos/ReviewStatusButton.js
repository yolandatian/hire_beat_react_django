import React from "react";

function ReviewStatusButton(props) {
  var text = "";
  var onTap = null;
  var className = null;
  if (props.is_expert_reviewed) {
    text = "Review Ready";
    onTap = props.redirectToVideoPlayer;
    className = "btn btn-success";
  } else if (props.needed_expert_review) {
    text = "Under Review";
    onTap = () => console.log("nothing and disable button");
    className = "btn btn-warning";
  } else {
    text = "Send for review";
    onTap = () => props.sendVideoForReview();
    className = "btn btn-primary";
  }
  return (
    <button onClick={onTap} className={className}>
      {text}
    </button>
  );
}

export default ReviewStatusButton;
