import React, { Component } from "react";
import { connect } from "react-redux";
import EssentialUserInfo from "./EssentialUserInfo";
import ProfileInfo from "./ProfileInfo";
import { updateProfile } from "../../../redux/actions/auth_actions";

export class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is profile page</h1>
        <EssentialUserInfo user={this.props.user} />
        <ProfileInfo
          profile={this.props.profile}
          userID={this.props.user.id}
          updateProfile={this.props.updateProfile}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { updateProfile })(ProfileContainer);
