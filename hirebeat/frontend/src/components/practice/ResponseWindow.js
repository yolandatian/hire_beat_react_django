import React, { Component } from "react";
import VideoRecorder from "./VideoRecorder";
import CountdownBar from "./CountdownBar";
import { videoRecorderOptions } from "../../constants/constants";
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
    status: "waiting", // Used to control CountdownBar and 30's preparation
  };

  componentDidMount() {
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
    videoRecorderOptions.width = window.innerWidth / 2.4;
    videoRecorderOptions.height = window.innerWidth / 3.6;
    return (
      <div>
        {this.props.loaded ? (
          <PracticeCard>
            <div className="practice-card-top-row">
              <h6>
                Question {this.props.q_index + 1} / {this.props.q_count}
              </h6>
              <CountdownBar
                timeTotal={this.props.responseLength * 60}
                timeRemain={this.props.responseLength * 60}
                status={this.state.status}
              />
            </div>
            <h4>{this.props.questions[this.props.q_index].description}</h4>
            <VideoRecorder
              {...videoRecorderOptions}
              startRecording={this.startRecording}
              recordingDone={this.recordingDone}
              isTesting={false}
            />
            <NotePad padWidth={window.innerWidth / 2.4} />
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
