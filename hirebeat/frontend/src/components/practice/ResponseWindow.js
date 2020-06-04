import React, { Component } from "react";
import VideoRecorder from "./VideoRecorder";
import CountdownBar from "./CountdownBar";
import { videoRecorderOptions } from "../../constants/constants";
import QuestionInfo from "./QuestionInfo";
import { PracticeCard, CardRow } from "./CardComponents";
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
    questionType: PropTypes.string.isRequired, // Used to determine the type of questions to get
    questionNumber: PropTypes.number.isRequired,
    responseLength: PropTypes.number.isRequired,
  };

  state = {
    timeTotal: 1,
    timeRemain: 1,
    status: "waiting",
  };

  componentDidMount() {
    this.setState({
      timeRemain: this.props.responseLength * 60,
      timeTotal: this.props.responseLength * 60,
    });
    this.props.getQuestions(this.props.questionNumber);
  }

  startRecording = () => {
    this.setState({
      status: "recording",
    });
  };

  recordingDone = () => {
    this.setState({
      status: "done",
    });
  };

  render() {
    videoRecorderOptions.plugins.record.maxLength =
      this.props.responseLength * 60;
    videoRecorderOptions.width = window.innerWidth / 2.5;
    videoRecorderOptions.height = (window.innerWidth * 4) / 15;
    return (
      <div>
        {this.props.loaded ? (
          <PracticeCard>
            <QuestionInfo
              q_index={this.props.q_index}
              q_count={this.props.q_count}
              question={this.props.questions[this.props.q_index]}
            />
            <CountdownBar
              timeTotal={this.state.timeTotal}
              timeRemain={this.state.timeRemain}
              status={this.state.status}
            />
            <CardRow>
              <VideoRecorder
                {...videoRecorderOptions}
                startRecording={this.startRecording}
                recordingDone={this.recordingDone}
              />
            </CardRow>
            <CardRow>
              <NotePad />
            </CardRow>
          </PracticeCard>
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
