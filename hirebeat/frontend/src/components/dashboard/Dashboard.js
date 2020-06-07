import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import ProfileInfo from "./profile/ProfileInfo";
import VideoContainer from "./videos/VideoContainer";
import { updateProfile, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow } from "./DashboardComponents";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  state = {
    subpage: "videos", // or profile
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
        return <VideoContainer />;
      default:
      //Do nothing
    }
  };

  render() {
    return (
      <div className="container dashboard-container">
        <DbRow>
          <div className="col-7">
            <EssentialUserInfo
              user={this.props.user}
              profile={this.props.profile}
            />
          </div>
          <div className="col-4"></div>
        </DbRow>
        <br />
        <br />
        <DbRow>
          <div className="col-2">
            <ButtonPanel
              renderVideos={this.renderVideos}
              renderProfile={this.renderProfile}
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
