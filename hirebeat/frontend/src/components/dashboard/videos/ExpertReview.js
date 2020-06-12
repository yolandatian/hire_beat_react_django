import React from "react";
import { ReviewHeader, QuestionTitle, Comments } from "../DashboardComponents";

export function ExpertReview(props) {
  return (
    <div className="container height-400">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <p className="text-success">{props.v.score}</p>
      <p className="text-success">{props.v.comments}</p>
      <h3 style={{ color: "#98b8f6" }}>Comments:</h3>
      <Comments comments={props.v.comments} />
    </div>
  );
}
