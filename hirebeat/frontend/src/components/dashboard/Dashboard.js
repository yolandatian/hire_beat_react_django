import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import ProfileInfo from "./profile/ProfileInfo";
import VideoPreviewList from "./videos/VideoPreviewList";
import { updateProfile, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow } from "./DashboardComponents";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  state = {
    subpage: "videos", // or profile or analytics
  };

  renderVideos = () => {
    this.setState({
      subpage: "videos",
    });
  };

  renderAnalytics = () => {
    this.setState({
      subpage: "analytics",
    });
  };

  renderProfile = () => {
    this.setState({
      subpage: "profile",
    });
  };

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "profile":
        return (
          <ProfileInfo
            profile={this.props.profile}
            userID={this.props.user.id}
            updateProfile={this.props.updateProfile}
          />
        );
      case "videos":
        return <VideoPreviewList />;
      case "analytics":
        return <h1>Analytics list</h1>;
      default:
      //Do nothing
    }
  };

  render() {
    return (
      <div className="container dashboard-container">
        <DbRow>
          <div className="col-11">
            <EssentialUserInfo
              user={this.props.user}
              profile={this.props.profile}
            />
          </div>
        </DbRow>
        <br />
        <br />
        <DbRow>
          <div className="col-2">
            <ButtonPanel
              renderVideos={this.renderVideos}
              renderProfile={this.renderProfile}
              renderAnalytics={this.renderAnalytics}
              subpage={this.state.subpage}
            />
          </div>
          <div className="col-10">{this.renderSubpage()}</div>
        </DbRow>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { loadProfile, updateProfile })(
  Dashboard
);
