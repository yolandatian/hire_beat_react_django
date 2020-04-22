import React, { Component } from "react";
import S3FileUpload from "react-s3";

const config = {
  bucketName: "hirebeat-videos",
  dirName: "videos",
  region: "us-east-1",
  accessKeyId: "",
  secretAccessKey: "",
};

export class VideoUploader extends Component {
  state = {
    file: null,
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  upload = () => {
    S3FileUpload.uploadFile(this.state.file, config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <input type="file" onChange={this.onChange} />
          <button onClick={this.upload}>Upload</button>
        </div>
      </div>
    );
  }
}

export default VideoUploader;
