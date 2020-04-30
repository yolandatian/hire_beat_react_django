import React, { Component } from "react";
import Select from "react-select";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";

export class PracticePage extends Component {
  state = {
    paramsAreSet: false,
    numberOfQuestions: { value: 2 },
    lengthOfResponse: { value: 1 },
  };

  setParams = () => {
    this.setState({ ...this.state, paramsAreSet: true });
  };

  handleChangeNumber = (numberOfQuestions) => {
    this.setState({ numberOfQuestions });
  };

  handleChangeLength = (lengthOfResponse) => {
    this.setState({ lengthOfResponse });
  };

  getQuestionsParams = () => {
    const { numberOfQuestions, lengthOfResponse } = this.state;
    return (
      <div>
        <Select
          value={numberOfQuestions.value}
          onChange={this.handleChangeNumber}
          options={numberOfQuestionOptions}
        />
        <Select
          value={lengthOfResponse.value}
          onChange={this.handleChangeLength}
          options={lengthOfResponseOptions}
        />
        <button onClick={this.setParams}>done</button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>This is practice page</h1>
        {this.state.paramsAreSet ? (
          <ResponseWindow
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
