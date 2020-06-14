import React from "react";
import Chart from "react-apexcharts";
import {
  radialChartOptions,
  infillChartData,
  convertStringToArray,
} from "../../../constants/constants";
import { ReviewHeader, QuestionTitle } from "../DashboardComponents";

const sectionTitleStyle = {
  fontSize: 20,
  fontWeight: 200,
  color: "#7d7d7d",
  marginBottom: 0,
};

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
              width: (props.percent * 10).toString() + "%",
            }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <ProgressScore percent={props.percent} height={props.height * 2} />
      </div>
    </div>
  );
};

const ProgressScore = (props) => {
  //percent, height
  var scoreClassName = props.height == 30 ? "text-30 " : "text-15 ";
  if (props.percent > 8.5) {
    scoreClassName += "text-success";
  } else if (props.percent > 5) {
    scoreClassName += "text-primary";
  } else if (props.percent > 3) {
    scoreClassName += "text-warning";
  } else {
    scoreClassName += "text-danger";
  }
  return (
    <div className="d-flex align-items-end">
      <p className={scoreClassName}>{props.percent}</p>
      <p style={{ marginBottom: 5, fontSize: props.height / 1.5 }}>/10</p>
    </div>
  );
};

const PercentTag = (props) => {
  if (props.percent > 8.5) {
    return <p className="text-success">Excellent!</p>;
  } else if (props.percent > 5) {
    return <p className="text-primary">Well Done</p>;
  } else if (props.percent > 3) {
    return <p className="text-warning">You Can Improve</p>;
  } else {
    return <p className="text-danger">Needs Attention!</p>;
  }
};

const AICategoryReview = (props) => {
  // category, percent
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-2 d-flex align-items-center">
          <h3>{props.category}</h3>
        </div>
        <div className="col-7">
          <ProgressBar
            color={"orange"}
            height={"8px"}
            percent={props.percent}
          />
        </div>
        <div className="col-3">
          <PercentTag percent={props.percent} />
        </div>
      </div>
      <br />
    </div>
  );
};

export function AIReview(props) {
  var fakeCategory = "a,b,c,d";
  var fakePercent = "10,7,2,5";
  var categoryArray = convertStringToArray(fakeCategory);
  var percentArray = convertStringToArray(fakePercent);
  infillChartData(categoryArray, percentArray);
  var percent = 7;
  return (
    <div className="container height-600">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <p style={sectionTitleStyle}>Overall Score</p>
      <ProgressBar color={"blue"} height={15} percent={percent} />
      <div className="row">
        <div className="col-5">
          <div id="chart">
            <Chart
              options={radialChartOptions.options}
              series={radialChartOptions.series}
              type="radar"
              height={350}
            />
          </div>
        </div>
        <div className="col-7">
          <p style={sectionTitleStyle}>Details</p>
          {categoryArray.map((c, index) => {
            return (
              <AICategoryReview
                category={c}
                percent={percentArray[index]}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
