import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Home extends Component {
  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        console.log("reviewer confirmed");
        return <Redirect to="/review" />;
      }
    }
    return (
      <div
        className="container-fluid"
        style={{
          padding: 0,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home-gradient.png"
          width="100%"
        />
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home2.png"
          width="80%"
        />
        <br />
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home3.png"
          width="80%"
        />
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home5.png"
          width="80%"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, null)(Home);
