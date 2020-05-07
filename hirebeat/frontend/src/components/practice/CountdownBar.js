import React, { Component } from "react";
import { Line } from "rc-progress";

const lineStyle = {
  width: "400px",
};

export class CountdownBar extends Component {
  render() {
    var percent = (this.props.time_remain / this.props.time_total) * 100;
    return (
      <div>
        <Line
          percent={percent}
          strokeWidth="3"
          strokeColor="#17808a"
          style={lineStyle}
        />
      </div>
    );
  }
}

export default CountdownBar;
