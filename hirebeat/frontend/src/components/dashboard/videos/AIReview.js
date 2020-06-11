import React from "react";

export function AIReview(props) {
  return (
    <div className="container height-400">
      <p className="text-success">ai review</p>
      <button onClick={() => props.setSubPage("status")}>Back</button>
    </div>
  );
}
