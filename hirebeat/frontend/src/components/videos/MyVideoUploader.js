var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";
import { addVideo } from "../../redux/actions/video_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  VideoNumberLinkRow,
  RecordDoneButton,
  BglessCardButton,
} from "../practice/CardComponents";
import { withRouter } from "react-router-dom";

export class MyVideoUploader extends Component {
  constructor(props) {
    super(props);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  static propTypes = {
    addVideo: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    q_index: PropTypes.number.isRequired,
  };

  onUploadFinish = () => {
    const videoMetaData = {
      url: `https://test-hb-videos.s3.amazonaws.com/${this.props.video.name}`,
      q_description: `${this.props.questions[this.props.q_index].description}`,
    };
    console.log(videoMetaData);
    this.props.addVideo(videoMetaData);
    console.log(this.props.video.name + "is saved");
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  handleUpload() {
    console.log("======result========");
    console.log(this.props.saved_video_count);
    console.log(this.props.save_limit);
    if (this.props.saved_video_count < this.props.save_limit) {
      this.uploader.uploadFile(this.props.video);
      this.props.resetDeviceAndNextQuestion();
    } else {
      this.props.createMessage({
        errorMessage: "Video save limit already reached",
      });
    }
  }

  handleUploadAndFinish = () => {
    if (this.uploadCheckPassed) {
      this.uploader.uploadFile(this.props.video);
      this.redirectToDashboard();
    } else {
      this.props.createMessage({
        errorMessage: "Video save limit already reached",
      });
    }
  };

  uploadCheckPassed = () => {
    console.log("======result========");
    console.log(this.props.saved_video_count);
    console.log(this.props.save_limit);
    return this.props.saved_video_count < this.props.save_limit;
  };

  redirectToDashboard = () => {
    // redirect to profile
    const { history } = this.props;
    if (history) history.push("/dashboard/");
  };

  render() {
    console.log("======result========");
    console.log(this.props.saved_video_count);
    console.log(this.props.save_limit);
    var saveOnTap = this.handleUpload;
    var skipOnTap = this.props.resetDeviceAndNextQuestion;
    var saveText = "Save and Next";
    var skipText = "Discard and Skip";
    if (this.props.last_q) {
      saveOnTap = this.handleUploadAndFinish;
      skipOnTap = this.redirectToDashboard;
      saveText = "Save and Finish";
      skipText = "Skip and Finish";
    }
    return (
      <div>
        <div style={{ display: "none" }}>
          <ReactS3Uploader
            signingUrl="/sign_auth"
            signingUrlMethod="GET"
            onError={this.onUploadError}
            onFinish={this.onUploadFinish}
            uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
            contentDisposition="auto"
            scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
            inputRef={(cmp) => (this.uploadInput = cmp)}
            ref={(uploader) => {
              this.uploader = uploader;
            }}
            autoUpload={true}
          />
        </div>
        <br />
        <RecordDoneButton
          onTap={saveOnTap}
          textDisplayed={saveText}
          buttonWidth={"100%"}
        />
        <VideoNumberLinkRow
          number_of_videos_to_save={
            this.props.save_limit == 1000
              ? "Unlimited"
              : this.props.save_limit - this.props.saved_video_count
          }
          //upgrade={() => console.log("upgrade")}
        />
        <RecordDoneButton
          onTap={this.props.resetDevice}
          textDisplayed={"Try Again"}
          buttonWidth={"100%"}
        />
        <BglessCardButton
          onTap={skipOnTap}
          textDisplayed={skipText}
          buttonWidth={"100%"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  q_index: state.question_reducer.q_index,
  save_limit: state.auth_reducer.profile.save_limit,
  saved_video_count: state.auth_reducer.profile.saved_video_count,
});

export default connect(mapStateToProps, { addVideo, createMessage })(
  withRouter(MyVideoUploader)
);
