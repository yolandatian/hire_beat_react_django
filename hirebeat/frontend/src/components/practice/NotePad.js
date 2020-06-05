import React, { Component } from "react";

export class NotePad extends Component {
  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <textarea
            style={{ width: this.props.padWidth, height: "80px" }}
            placeholder=" Your notepad ..."
          />
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default NotePad;
