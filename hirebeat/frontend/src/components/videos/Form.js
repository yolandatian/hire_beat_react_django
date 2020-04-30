import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVideo } from "../../redux/actions/video_actions";

export class Form extends Component {
  state = {
    url: "",
  };

  static propTypes = {
    addVideo: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    // Monitors the input textfield and update state as user typing
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const video = this.state;
    this.props.addVideo(video);
  };

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Video</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>URL</label>
            <input
              className="front-control"
              type="text"
              name="url"
              onChange={this.onChange}
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addVideo })(Form);
