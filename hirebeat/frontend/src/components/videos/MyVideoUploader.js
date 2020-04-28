var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";

export class MyVideoUploader extends Component {
  constructor(props) {
    super(props);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    this.uploader.uploadFile(this.props.video);
  }

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

export default MyVideoUploader;
