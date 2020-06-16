import React, { Component } from "react";

export class CountdownBar extends Component {
  state = {
    timeTotal: 30,
    timeRemain: 30,
    intervalID: 0,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      timeTotal: this.props.timeTotal,
      timeRemain: this.props.timeTotal,
    });
    if (this.props.status == "Preparation") {
      this.startCountDown();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status != this.props.status) {
      clearInterval(this.state.intervalID);
      this.setState(
        {
          ...this.state,
          timeRemain: this.props.timeTotal,
          timeTotal: this.props.timeTotal,
        },
        () => {
          // Callback to fire the timer
          if (
            this.props.status != "Your Answer" &&
            this.props.status != "Loading"
          ) {
            this.startCountDown();
          }
        }
      );
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
      <div className="d-flex justify-content-center align-items-center">
        <div className="progress" style={{ width: "120px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: percent.toString() + "%" }}
          />
        </div>
        {this.state.timeRemain} / {this.state.timeTotal}
      </div>
    );
  }
}

export default CountdownBar;
