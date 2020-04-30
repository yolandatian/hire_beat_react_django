import React, { Component } from "react";
import { connect } from "react-redux";

export class QuestionInfo extends Component {
  state = {
    questions: [],
    q_index: 0,
    q_count: 0,
  };

  render() {
    return (
      <div>
        <h2>QuestionInfo</h2>
        <p>
          {this.props.q_index + 1}/{this.props.q_count}
        </p>
        <h1>{this.props.questions[this.props.q_index].title}</h1>
        <h2>{this.props.questions[this.props.q_index].description}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  q_count: state.question_reducer.q_count,
  q_index: state.question_reducer.q_index,
  questions: state.question_reducer.questions,
});

export default connect(mapStateToProps)(QuestionInfo);
