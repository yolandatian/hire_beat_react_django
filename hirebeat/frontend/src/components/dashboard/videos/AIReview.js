import React from "react";
import Chart from "react-apexcharts";
import {
  radialChartOptions,
  infillChartData,
} from "../../../constants/constants";
import { ReviewHeader, QuestionTitle } from "../DashboardComponents";

const ProgressBar = (props) => {
  // color, percent, height
  var barClassName =
    "progress-bar " +
    (props.color == "blue"
      ? "gradient-progress-blue"
      : "gradient-progress-orange");
  return (
    <div className="row d-flex align-items-center">
      <div className="col-10">
        <div
          className="progress"
          style={{ height: props.height, borderRadius: "20px" }}
        >
          <div
            className={barClassName}
            role="progressbar"
            style={{
              width: props.percent.toString() + "%",
            }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <ProgressScore percent={props.percent} />
      </div>
    </div>
  );
};

const ProgressScore = (props) => {
  var scoreClassName = "text-30 ";
  if (props.percent > 85) {
    scoreClassName += "text-success";
  } else if (props.percent > 50) {
    scoreClassName += "text-primary";
  } else if (props.percent > 30) {
    scoreClassName += "text-warning";
  } else {
    scoreClassName += "text-danger";
  }
  return (
    <div className="d-flex align-items-end">
      <p className={scoreClassName}>{props.percent / 10}</p>
      <h4 style={{ marginBottom: "15px" }}>/ 10</h4>
    </div>
  );
};

export function AIReview(props) {
  infillChartData("80,70,60,50", "a,b,c,d");
  var percent = 70;
  return (
    <div className="container height-600">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <ProgressBar color={"blue"} height={"15px"} percent={percent} />
      <div id="chart">
        <Chart
          options={radialChartOptions.options}
          series={radialChartOptions.series}
          type="radar"
          height={350}
        />
      </div>
    </div>
  );
}
