import React, { Component } from "react";
import VideoRecorder from "./VideoRecorder";
import { videoRecorderOptions } from "../../constants/constants";
import QuestionInfo from "./QuestionInfo";
import NotePad from "./NotePad";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestions } from "../../redux/actions/question_actions";
import { createMessage } from "../../redux/actions/message_actions";

export class ResponseWindow extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getQuestions: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired, // Used to determine the type of questions to get
  };

  componentDidMount() {
    this.props.getQuestions(this.props.number);
  }

  render() {
    videoRecorderOptions.plugins.record.maxLength = this.props.length * 60;
    return (
      <div>
        {this.props.loaded ? (
          <div>
            <QuestionInfo
              q_index={this.props.q_index}
              q_count={this.props.q_count}
              question={this.props.questions[this.props.q_index]}
            />
            <NotePad />
            <VideoRecorder {...videoRecorderOptions} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  loaded: state.question_reducer.loaded,
  done: state.question_reducer.done,
  q_count: state.question_reducer.q_count,
  q_index: state.question_reducer.q_index,
});

export default connect(mapStateToProps, { getQuestions })(ResponseWindow);
