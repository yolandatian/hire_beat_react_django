import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ProfileContainer from "./profile/ProfileContainer";
import VideoContainer from "./VideoContainer";

export class Dashboard extends Component {
  state = {
    subpage: "videos",
  };

  renderVideos = () => {
    this.setState({
      subpage: "videos",
    });
  };

  renderProfile = () => {
    this.setState({
      subpage: "profile",
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.renderVideos}>Videos</button>
        <button onClick={this.renderProfile}>Profile</button>
        {this.state.subpage == "videos" ? (
          <VideoContainer />
        ) : (
          <ProfileContainer />
        )}
      </div>
    );
  }
}

export default Dashboard;
