import React, { Component } from "react";
import { Line } from "rc-progress";

const lineStyle = {
  width: "100%",
};

export class CountdownBar extends Component {
  state = {
    timeTotal: this.props.timeTotal,
    timeRemain: this.props.timeRemain,
    intervalID: 0,
  };

  componentDidUpdate(prevProps) {
    console.log("=====props in countdownbar");
    console.log(this.state.intervalID);
    console.log(this.props.status);
    if (
      prevProps.status != this.props.status &&
      this.props.status == "recording"
    ) {
      this.startCountDown();
    } else if (
      prevProps.status != this.props.status &&
      this.props.status == "done"
    ) {
      clearInterval(this.state.intervalID);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  startCountDown = () => {
    var intervalID = setInterval(this.countDown, 1000);
    this.setState({ ...this.state, intervalID: intervalID });
  };

  countDown = () => {
    if (this.state.timeRemain > 0) {
      this.setState({
        ...this.state,
        timeRemain: this.state.timeRemain - 1,
      });
    } else {
      clearInterval(this.state.intervalID);
    }
  };

  render() {
    var percent = (this.state.timeRemain / this.state.timeTotal) * 100;
    return (
      <div>
        <Line
          percent={percent}
          strokeWidth="3"
          strokeColor="#17808a"
          style={lineStyle}
        />
        {this.state.timeRemain} / {this.state.timeTotal}
      </div>
    );
  }
}

export default CountdownBar;
