import React from "react";
import {
  ReviewHeader,
  QuestionTitle,
  Comments,
  CategoryTitle,
} from "../DashboardComponents";
import Chart from "react-apexcharts";
import {
  infillOverallData,
  infillBarData,
  convertStringToArray,
} from "../../../constants/constants";

const OverallScore = (props) => {
  var options = infillOverallData(props.percent);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="radialBar"
      height={115}
      key={"overall"}
    />
  );
};

export function ExpertReview(props) {
  var fakeCategory = "a,b,c,d,e";
  var fakePercent = "10,7,2,8,5";
  var categoryArray = convertStringToArray(fakeCategory);
  var percentArray = convertStringToArray(fakePercent);
  return (
    <div className="container height-600">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <div className="row">
        <div className="col score-col">
          <CategoryTitle title={"Overall Score"} />
          <OverallScore percent={9} />
        </div>
        {categoryArray.map((c, index) => {
          var options = infillBarData(percentArray[index]);
          return (
            <div className="col score-col" key={index + c}>
              <CategoryTitle title={c} key={c} />
              <Chart
                options={options.options}
                series={options.series}
                type="radialBar"
                height={150}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <h3 style={{ color: "#98b8f6" }}>Comments:</h3>
      <Comments comments={props.v.comments} />
    </div>
  );
}
