var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";

export class MyVideoUploader extends Component {
  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  render() {
    return (
      <div>
        <ReactS3Uploader
          signingUrl="/sign_auth"
          signingUrlMethod="GET"
          accept="image/*"
          s3path="/uploads/"
          preprocess={this.onUploadStart}
          onSignedUrl={this.onSignedUrl}
          onProgress={this.onUploadProgress}
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          //signingUrlHeaders={{ additional: headers }}
          //signingUrlQueryParams={{ additional: query - params }}
          signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
          uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
          contentDisposition="auto"
          scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
          inputRef={(cmp) => (this.uploadInput = cmp)}
          autoUpload={true}
        />
      </div>
    );
  }
}

export default MyVideoUploader;
