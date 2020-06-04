import React, { Component } from "react";

export class QuestionInfo extends Component {
  render() {
    return (
      <div>
        <h6>
          Question {this.props.q_index + 1} / {this.props.q_count}
        </h6>
        <h5>{this.props.question.description}</h5>
      </div>
    );
  }
}

export default QuestionInfo;
