import React, { Component } from "react";
import VideoRecorder from "./VideoRecorder";
import { videoRecorderOptions } from "../../constants/constants";
import QuestionInfo from "./QuestionInfo";
import NotePad from "./NotePad";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestions } from "../../redux/actions/question_actions";

export class ResponseWindow extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getQuestions: PropTypes.func.isRequired,
  };

  state = {
    loaded: false,
    questions: [],
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
            <QuestionInfo />
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
});

export default connect(mapStateToProps, { getQuestions })(ResponseWindow);
