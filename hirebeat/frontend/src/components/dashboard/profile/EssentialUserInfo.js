import React, { Component } from "react";

export class EssentialUserInfo extends Component {
  render() {
    return (
      <div className="app">
        <h2>Username</h2>
        {this.props.user.username}
        <h2>Email</h2>
        {this.props.user.email}
      </div>
    );
  }
}

export default EssentialUserInfo;
