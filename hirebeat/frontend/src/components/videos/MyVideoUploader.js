var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";
import { addVideo } from "../../redux/actions/video_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

  handleUpload() {
    this.uploader.uploadFile(this.props.video);
    this.props.videoHandled();
  }

  onUploadFinish = () => {
    const videoMetaData = {
      url: `https://test-hb-videos.s3.amazonaws.com/${this.props.video.name}`,
      title: `${this.props.questions[this.props.q_index].title}`,
    };
    this.props.addVideo(videoMetaData);
    console.log(this.props.video.name + "is saved");
  };

  handleDiscard = () => {
    this.props.videoHandled();
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  render() {
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
            autoUpload={false}
          />
        </div>
        <button type="button" value="Upload" onClick={this.handleUpload}>
          Save
        </button>
        <button type="button" value="Upload" onClick={this.props.videoHandled}>
          Discard
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  q_index: state.question_reducer.q_index,
});

export default connect(mapStateToProps, { addVideo })(MyVideoUploader);
