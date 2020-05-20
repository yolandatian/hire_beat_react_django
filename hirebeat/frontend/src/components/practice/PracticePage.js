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

  getQuestionsParams = () => {
    const { numberOfQuestions, lengthOfResponse } = this.state;
    return (
      <div>
        <Select
          value={numberOfQuestions}
          onChange={this.handleChangeNumber}
          options={numberOfQuestionOptions}
        />
        <Select
          value={lengthOfResponse}
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
