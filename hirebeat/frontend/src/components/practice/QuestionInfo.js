import React, { Component } from "react";

export class QuestionInfo extends Component {
  render() {
    return (
      <div>
        <h2>
          Question {this.props.q_index + 1} / {this.props.q_count}
        </h2>
        <h2>{this.props.question.description}</h2>
      </div>
    );
  }
}

export default QuestionInfo;
