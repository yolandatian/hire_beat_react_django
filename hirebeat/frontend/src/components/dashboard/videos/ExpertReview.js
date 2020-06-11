import React from "react";

export function ExpertReview(props) {
  return (
    <div className="container height-400">
      <p className="text-success">{props.v.score}</p>
      <p className="text-success">{props.v.comments}</p>
      <button onClick={() => props.setSubPage("status")}>Back</button>
    </div>
  );
}
