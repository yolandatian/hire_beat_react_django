import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class QuestionTypeChoices extends Component {
  redirectToBehaviorQuestions = () => {
    const { history } = this.props;
    if (history) history.push(`/practice/behavior`);
  };

  redirectToTechQuestions = () => {
    const { history } = this.props;
    if (history) history.push(`/practice/tech`);
  };

  render() {
    return (
      <div>
        <button onClick={this.redirectToTechQuestions}>Tech Question</button>
        <button onClick={this.redirectToBehaviorQuestions}>
          Behavior Question
        </button>
      </div>
    );
  }
}

export default withRouter(QuestionTypeChoices);
