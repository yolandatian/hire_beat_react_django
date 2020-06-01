import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import behaviorIcon from "../../assets/behavior_icon.png";
import techIcon from "../../assets/tech_icon.png";

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
      <div className="container practice-card">
        <div
          className="card mb-3"
          style={{ width: "80%", marginLeft: "10%", marginLeft: "10%" }}
        >
          <div
            className="card-header"
            style={{ padding: 1, backgroundColor: "blue" }}
          />
          <div className="card-body practice-card-body">
            <div className="row practice-card-row">
              <h5>Create A New Mock Interview</h5>
            </div>
            <div className="row practice-card-row">
              <h1>Choose Interview Category</h1>
            </div>
            <div className="row practice-card-row-bottom">
              <div className="practice-card-button-container">
                <div className="row practice-card-row">
                  <img src={behaviorIcon} width="40%" />
                </div>
                <div className="row practice-card-row">
                  <button
                    className="btn btn-warning"
                    style={{
                      WebkitBorderRadius: "20px",
                      width: "90%",
                      boxShadow: "0px 0px 8px #dc6b2a",
                    }}
                    onClick={this.redirectToBehaviorQuestions}
                  >
                    <strong>Behavior Question</strong>
                  </button>
                </div>
                <div className="row practice-card-row">
                  <p>What is a behavior question</p>
                </div>
              </div>
              <div className="practice-card-button-container">
                <div className="row practice-card-row">
                  <img src={techIcon} width="39%" />
                </div>
                <div className="row practice-card-row">
                  <button
                    className="btn btn-warning"
                    style={{
                      WebkitBorderRadius: "20px",
                      width: "90%",
                      boxShadow: "0px 0px 8px #dc6b2a",
                    }}
                    onClick={this.redirectToTechQuestions}
                  >
                    <strong>Tech Question</strong>
                  </button>
                </div>
                <div className="row practice-card-row">
                  <p>What is a technique question</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionTypeChoices);
