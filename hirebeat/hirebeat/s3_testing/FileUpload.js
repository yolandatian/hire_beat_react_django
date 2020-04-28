import React, { Component } from "react";
import axios from "axios";

const aws = require("aws-sdk");
const BUCKET = "hirebeat-videos";

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
});

function upload(file) {
  const s3 = new aws.S3();
  const params = {
    Bucket: BUCKET,
    Key: file.filename,
    Expires: 60,
    ContentType: file.filetype,
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl("putObject", params, (err, url) => {
      if (err) {
        reject(err);
      }
      resolve(url);
    });
  });
}

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }

  submitFile = (file) => {
    return axios
      .get("/upload", {
        params: {
          filename: file.name,
          filetype: file.type,
        },
      })
      .then((res) => {
        const options = {
          Origin: {},
          headers: {
            "Content-Type": file.type,
          },
        };
        return axios.put(res.data.url, file, options);
      })
      .then((res) => {
        const { name } = res.config.data;
        return {
          name,
          isUploading: true,
          url: `https://hirebeat-videos.s3.amazonaws.com/${file.name}`,
        };
      });
  };

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  };

  render() {
    return (
      <form onSubmit={upload}>
        <input
          label="upload file"
          type="file"
          onChange={this.handleFileUpload}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default FileUpload;
