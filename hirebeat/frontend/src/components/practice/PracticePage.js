import React, { Component } from "react";
import Select from "react-select";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";

export class PracticePage extends Component {
  state = {
    type: "behavior",
    paramsAreSet: false,
    numberOfQuestions: { value: 2, label: "2 Questions" },
    lengthOfResponse: { value: 1, label: "1 minute" },
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      type: this.props.match.params.type, // get param from url
    });
  }

  setParams = () => {
    this.setState({ ...this.state, paramsAreSet: true });
  };

  handleChangeNumber = (numberOfQuestions) => {
    this.setState({ numberOfQuestions });
  };

  handleChangeLength = (lengthOfResponse) => {
    this.setState({ lengthOfResponse });
  };

  getEstimateTime = () => {
    return (
      <a style={{ color: "#f3a340", textDecorationLine: "underline" }}>
        {(3 * this.state.lengthOfResponse.value + 0.5) *
          this.state.numberOfQuestions.value}{" "}
        mins
      </a>
    );
  };

  getQuestionsParams = () => {
    const { numberOfQuestions, lengthOfResponse } = this.state;
    return (
      <div className="container practice-card">
        <div
          className="card mb-3"
          style={{ width: "80%", marginLeft: "10%", marginLeft: "10%" }}
        >
          <div
            className="card-header"
            style={{ padding: 3, backgroundColor: "#538af2" }}
          />
          <div className="card-body practice-card-body">
            <div className="row practice-card-row">
              <h5>Create A New Mock Interview</h5>
            </div>
            <div className="row practice-card-row">
              <h1>Set Your Practice Time</h1>
            </div>
            <div className="row practice-card-row">
              <div className="col-5">
                <p>How many questions do you want to practice?</p>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <div class="react-select-container">
                  <Select
                    value={numberOfQuestions}
                    onChange={this.handleChangeNumber}
                    options={numberOfQuestionOptions}
                  />
                </div>
              </div>
            </div>
            <div className="row practice-card-row">
              <div className="col-5">
                <p>How long should the responses be?</p>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <div class="react-select-container">
                  <Select
                    value={lengthOfResponse}
                    onChange={this.handleChangeLength}
                    options={lengthOfResponseOptions}
                  />
                </div>
              </div>
            </div>
            <div className="row practice-card-row">
              <h4>This will cost you {this.getEstimateTime()} on average</h4>
            </div>
            <div className="row practice-card-row">
              <button
                className="btn btn-warning"
                style={{
                  WebkitBorderRadius: "20px",
                  width: "30%",
                  boxShadow: "0px 0px 8px #dc6b2a",
                }}
                onClick={this.setParams}
              >
                <strong>Start Practice</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        {this.state.paramsAreSet ? (
          <ResponseWindow
            type={this.state.type}
            number={this.state.numberOfQuestions.value}
            length={this.state.lengthOfResponse.value}
          />
        ) : (
          this.getQuestionsParams()
        )}
      </div>
    );
  }
}

export default PracticePage;
