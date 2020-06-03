import React, { Component } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";

import "webrtc-adapter";
import RecordRTC from "recordrtc";

import "videojs-record/dist/css/videojs.record.css";
import Record from "videojs-record/dist/videojs.record.js";

import MyVideoUploader from "../videos/MyVideoUploader";
import CountdownBar from "./CountdownBar";
import { connect } from "react-redux";
import { NEXT_QUESTION } from "../../redux/actions/action_types";
import { CardRow } from "./CardComponents";

export class VideoRecorder extends Component {
  state = {
    videoRecorded: false,
    videoHandled: false,
    isTesting: false,
    video: null,
    time_total: this.props.plugins.record.maxLength,
    time_remain: this.props.plugins.record.maxLength,
    intervalID: null,
  };

  componentDidMount() {
    this.setState({ ...this.state, isTesting: this.props.isTesting });
    this.player = videojs(this.videoNode, this.props, () => {
      var version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(version_info);
    });

    this.player.on("deviceReady", () => {
      console.log("device is ready!");
    });

    this.player.on("startRecord", () => {
      console.log("started recording!");
      this.setState({
        ...this.state,
        time_remain: this.props.plugins.record.maxLength,
      });
      this.startCountDown();
    });

    this.player.on("finishRecord", () => {
      console.log("finished recording: ", this.player.recordedData);
      this.recordFinished();
    });

    this.player.on("error", (element, error) => {
      console.warn(error);
    });

    this.player.on("deviceError", () => {
      console.error("device error:", this.player.deviceErrorCode);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
    clearInterval(this.state.intervalId);
  }

  recordFinished = () => {
    clearInterval(this.state.intervalID);
    this.setState({
      ...this.state,
      video: this.player.recordedData,
      videoHandled: false,
      videoRecorded: true,
    });
  };

  startCountDown = () => {
    if (this.state.time_remain > 0) {
      var intervalID = setInterval(this.countDown, 1000);
      this.setState({ ...this.state, intervalID: intervalID });
    }
  };

  countDown = () => {
    this.setState({
      ...this.state,
      time_remain: this.state.time_remain - 1,
    });
  };

  resetDeviceAndNextQuestion = () => {
    this.resetDevice();
    this.props.onNextQuestion();
  };

  resetDevice = () => {
    this.setState({
      ...this.state,
      videoRecorded: false,
      videoHandled: true,
      time_total: this.props.plugins.record.maxLength,
      time_remain: this.props.plugins.record.maxLength,
    });
    this.player.record().reset();
    this.player.record().getDevice();
  };

  render() {
    return (
      <CardRow>
        <CardRow>
          <CountdownBar
            time_total={this.state.time_total}
            time_remain={this.state.time_remain}
          />
        </CardRow>
        <CardRow>
          <div data-vjs-player>
            <video
              id="myVideo"
              ref={(node) => (this.videoNode = node)}
              className="video-js vjs-default-skin"
              playsInline
            ></video>
          </div>
        </CardRow>
        <div>
          {!this.state.isTesting &&
          this.state.videoRecorded &&
          !this.state.videoHandled ? (
            <MyVideoUploader
              resetDeviceAndNextQuestion={this.resetDeviceAndNextQuestion}
              resetDevice={this.resetDevice}
              video={this.state.video}
            />
          ) : null}
        </div>
      </CardRow>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextQuestion: () => {
      dispatch({ type: NEXT_QUESTION });
    },
  };
};

export default connect(null, mapDispatchToProps)(VideoRecorder);
