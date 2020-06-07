import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import ProfileInfo from "./profile/ProfileInfo";
import VideoContainer from "./videos/VideoContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { updateProfile, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";

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
      <div>
        <Container>
          <br />
          <br />
          <Row>
            <Col>
              <div className="card">
                <div className="card-body">
                  <EssentialUserInfo user={this.props.user} />
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md={2} style={{ marginLeft: "5%" }}>
              <div className="card">
                <div className="card-body">
                  <ButtonPanel
                    renderVideos={this.renderVideos}
                    renderProfile={this.renderProfile}
                  />
                </div>
              </div>
            </Col>
            <Col md={8} style={{ marginLeft: "5%" }}>
              <div className="card">
                <div className="card-body">{this.renderSubpage()}</div>
              </div>
            </Col>
          </Row>
        </Container>
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
