import React, { Component } from "react";
import Select from "react-select";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";
import {
  PracticeCard,
  CardRow,
  QuestionTypeChoiceButton,
  QuestionCol,
  SelectCol,
} from "./CardComponents";

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
          this.state.numberOfQuestions.value}
        mins
      </a>
    );
  };

  selectForParam = (question, value, onTap, options) => {
    return (
      <CardRow>
        <QuestionCol>
          <p>{question}</p>
        </QuestionCol>
        <div className="col-1"></div>
        <SelectCol>
          <Select value={value} onChange={onTap} options={options} />
        </SelectCol>
      </CardRow>
    );
  };

  getQuestionsParams = () => {
    return (
      <PracticeCard>
        <CardRow>
          <h5>Create A New Mock Interview</h5>
        </CardRow>
        <CardRow>
          <h1>Set Your Practice Time</h1>
        </CardRow>
        {this.selectForParam(
          "How long should the responses be?",
          this.state.lengthOfResponse,
          this.handleChangeLength,
          lengthOfResponseOptions
        )}
        {this.selectForParam(
          "How many questions do you want to practice?",
          this.state.numberOfQuestions,
          this.handleChangeNumber,
          numberOfQuestionOptions
        )}
        <CardRow>
          <h4>This will cost you {this.getEstimateTime()} on average</h4>
        </CardRow>
        <CardRow>
          <QuestionTypeChoiceButton
            onTap={this.setParams}
            textDisplayed={"Start Practice"}
          />
        </CardRow>
      </PracticeCard>
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
