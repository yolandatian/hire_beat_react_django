import React, { Component } from "react";
require("dotenv").config(); // Configure dotenv to load in the .env file
import axios from "axios";

export class VUploaderTest extends Component {
  state = {
    file: null,
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  upload = () => {
    axios
      .get("sign_s3", {
        params: { bucket_name: "test-hb-videos", object_name: "testfile" },
      })
      .then((res) => {
        console.log("====== res =======");
        console.log(res);
        const options = {
          headers: {
            "Content-Type": this.state.file.type,
            Origin: "",
          },
        };
        console.log("======  res data =======");
        console.log(res.data.url);
        console.log(res.data.fields);
        axios
          .put(
            "https://test-hb-videos.s3.amazonaws.com/",
            res.data.fields,
            this.state.file,
            options
          )
          .then((res) => {
            console.log("====== aws =======");
            console.log(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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

export default VUploaderTest;
