import React from "react";
import Chart from "react-apexcharts";
import {
  radialChartOptions,
  infillChartData,
} from "../../../constants/constants";
import { ReviewHeader, QuestionTitle } from "../DashboardComponents";

export function AIReview(props) {
  infillChartData("80,70,60,50", "a,b,c,d");
  return (
    <div className="container height-600">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
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
