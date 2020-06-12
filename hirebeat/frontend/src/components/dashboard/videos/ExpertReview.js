import React from "react";
import { ReviewHeader, QuestionTitle, Comments } from "../DashboardComponents";
import Chart from "react-apexcharts";
import { radialBarOptions, infillBarData } from "../../../constants/constants";

export function ExpertReview(props) {
  infillBarData(5);
  return (
    <div className="container height-400">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <div className="test">
        <strong style={{ fontSize: "40px", color: "white" }}>8</strong>
      </div>
      <Chart
        options={radialBarOptions.options}
        series={radialBarOptions.series}
        type="radialBar"
        height={150}
      />
      <p className="text-success">{props.v.score}</p>
      <p className="text-success">{props.v.comments}</p>
      <h3 style={{ color: "#98b8f6" }}>Comments:</h3>
      <Comments comments={props.v.comments} />
    </div>
  );
}
