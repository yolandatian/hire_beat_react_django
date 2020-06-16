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
import PrepCountdown from "./PrepCountdown";

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
    status: "Preparation", // or Recording or Your Answer Used to control CountdownBar and 30's preparation
  };

  componentDidMount() {
    this.props.getQuestions(this.props.questionNumber);
  }

  finishCountdown = () => {
    this.setState({
      status: "Loading",
    });
  };

  startRecording = () => {
    this.setState({
      status: "Recording",
    });
  };

  recordingDone = () => {
    this.setState({
      status: "Your Answer",
    });
  };

  resetCountdownBar = () => {
    this.setState({
      status: "Preparation",
    });
  };

  render() {
    var countTime =
      this.state.status == "Preparation" ? 30 : this.props.responseLength * 60;
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
            </div>
            <h4>{this.props.questions[this.props.q_index].description}</h4>
            <h5>{this.state.status}</h5>
            <CountdownBar timeTotal={countTime} status={this.state.status} />
            {this.state.status == "Preparation" ? (
              <PrepCountdown finishCountdown={this.finishCountdown} />
            ) : (
              <VideoRecorder
                {...videoRecorderOptions}
                startRecording={this.startRecording}
                recordingDone={this.recordingDone}
                resetCountdownBar={this.resetCountdownBar}
                isTesting={false}
                last_q={this.props.last_q}
              />
            )}
            <NotePad />
          </PracticeCard>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  loaded: state.question_reducer.loaded,
  last_q: state.question_reducer.last_q,
  q_count: state.question_reducer.q_count,
  q_index: state.question_reducer.q_index,
});

export default connect(mapStateToProps, { getQuestions })(ResponseWindow);
