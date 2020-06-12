import React from "react";

export function AIReview(props) {
  return (
    <div className="container height-600">
      <p className="text-success">ai review</p>
      <button onClick={() => props.setSubPage("status")}>Back</button>
    </div>
  );
}
