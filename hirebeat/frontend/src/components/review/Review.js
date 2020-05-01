import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnreviewedVideo } from "../../redux/actions/video_actions";

export class Review extends Component {
  componentDidMount() {}

  render() {
    this.props.getUnreviewedVideo();
    return <div>This is review page</div>;
  }
}

export default connect(null, { getUnreviewedVideo })(Review);
