import React, { Component } from "react";

export class NotePad extends Component {
  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <textarea
            style={{
              width: window.innerWidth / 2.4,
              height: "80px",
              borderColor: "lightgrey",
              borderWidth: "3px",
              borderRadius: "8px",
            }}
            placeholder=" Notes here ..."
          />
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default NotePad;
