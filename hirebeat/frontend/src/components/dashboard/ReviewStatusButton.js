import React from "react";

function ReviewStatusButton(props) {
  var text = "";
  var onTap = null;
  var style = null;
  if (props.is_expert_reviewed) {
    text = "Review Ready";
    onTap = props.redirectToVideoPlayer;
    style = null;
  } else if (props.needed_expert_review) {
    text = "Under Review";
    onTap = () => console.log("nothing and disable button");
    style = null;
  } else {
    text = "Send for review";
    onTap = () => console.log("mark as needed_expert_review");
    style = null;
  }
  return <button onClick={onTap}>{text}</button>;
}

export default ReviewStatusButton;
