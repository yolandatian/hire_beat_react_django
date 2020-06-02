import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import behaviorIcon from "../../assets/behavior_icon.png";
import techIcon from "../../assets/tech_icon.png";
import { PracticeCard, CardRow, ButtonContainer } from "./CardComponents";

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
      <PracticeCard>
        <CardRow>
          <h5>Create A New Mock Interview</h5>
        </CardRow>
        <CardRow>
          <h1>Choose Interview Category</h1>
        </CardRow>
        <div className="row practice-card-row-bottom">
          {ButtonContainer(
            behaviorIcon,
            this.redirectToBehaviorQuestions,
            "Behavior Question"
          )}
          {ButtonContainer(
            techIcon,
            this.redirectToTechQuestions,
            "Tech Question"
          )}
        </div>
      </PracticeCard>
    );
  }
}

export default withRouter(QuestionTypeChoices);
