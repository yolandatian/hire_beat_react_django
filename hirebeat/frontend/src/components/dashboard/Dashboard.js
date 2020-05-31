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
          <Row>
            <Col>
              <EssentialUserInfo user={this.props.user} />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col
              md={2}
              style={{
                backgroundColor: "#ffa",
                borderColor: "blue",
                borderRightColor: "blue",
              }}
            >
              <ButtonPanel
                renderVideos={this.renderVideos}
                renderProfile={this.renderProfile}
              />
            </Col>
            <Col md={{ span: 4, offset: 1 }}>{this.renderSubpage()}</Col>
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
