import React from "react";

export function ExpertReview(props) {
  return (
    <div>
      <h1>{props.score}</h1>
      <h1>{props.comments}</h1>
    </div>
  );
}
