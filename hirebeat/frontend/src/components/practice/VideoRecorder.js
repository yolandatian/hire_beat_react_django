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
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      // print version information at startup
      var version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(version_info);
    });

    // device is ready
    this.player.on("deviceReady", () => {
      console.log("device is ready!");
    });

    // user clicked the record button and started recording
    this.player.on("startRecord", () => {
      console.log("started recording!");
    });

    // user completed recording and stream is available
    this.player.on("finishRecord", () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      console.log("finished recording: ", this.player.recordedData);
      //this.player.record().saveAs({ video: "my-video-file-name.webm" });
      this.setState({
        video: this.player.recordedData,
        videoHandled: false,
        videoRecorded: true,
      });
    });

    // error handling
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
  }

  state = {
    videoRecorded: false,
    videoHandled: false,
    video: null,
  };

  videoHandled = () => {
    this.setState({
      video: null,
      videoRecorded: false,
      videoHandled: true,
    });
  };

  render() {
    return (
      <div className="container">
        <CountdownBar />
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
              videoHandled={this.videoHandled}
              video={this.state.video}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default VideoRecorder;
