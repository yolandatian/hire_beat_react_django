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
      <div>
        <h1>This is the home page</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, null)(Home);
