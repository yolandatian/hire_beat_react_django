import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import testImg from "../../assets/test.png";

export class Home extends Component {
  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        console.log("reviewer confirmed");
        return <Redirect to="/review" />;
      }
    }
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <img src={testImg} width="100%" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, null)(Home);
