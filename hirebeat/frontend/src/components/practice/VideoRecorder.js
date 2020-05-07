import React, { Component } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";

import "webrtc-adapter";
import RecordRTC from "recordrtc";

import "videojs-record/dist/css/videojs.record.css";
import Record from "videojs-record/dist/videojs.record.js";

import MyVideoUploader from "../videos/MyVideoUploader";
import CountdownBar from "./CountdownBar";

export class VideoRecorder extends Component {
  state = {
    videoRecorded: false,
    videoHandled: false,
    video: null,
    time_total: this.props.plugins.record.maxLength,
    time_remain: this.props.plugins.record.maxLength,
    intervalID: null,
  };

  componentDidMount() {
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
      this.startCountDown();
    });

    this.player.on("startRecord", () => {
      console.log("started recording!");
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
      intervalID: 0,
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

  videoSaveHandle = () => {
    // next question action
    this.setState({
      video: null,
      videoRecorded: false,
      videoHandled: true,
    });
    this.player.record().reset();
    this.player.record().getDevice();
  };

  videoDiscardHandle = () => {
    this.setState({
      video: null,
      videoRecorded: false,
      videoHandled: true,
    });
    this.player.record().reset();
    this.player.record().getDevice();
  };

  render() {
    return (
      <div className="container">
        <CountdownBar
          time_total={this.state.time_total}
          time_remain={this.state.time_remain}
        />
        <div data-vjs-player>
          <video
            id="myVideo"
            ref={(node) => (this.videoNode = node)}
            className="video-js vjs-default-skin"
            playsInline
          ></video>
        </div>
        <div>
          {this.state.videoRecorded && !this.state.videoHandled ? (
            <MyVideoUploader
              videoHandled={this.videoSaveHandle}
              video={this.state.video}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default VideoRecorder;
