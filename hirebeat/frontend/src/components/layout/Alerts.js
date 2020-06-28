import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      // Display error message from the server
      if (error.msg.url) alert.error(`URL: ${error.msg.url.join()}`);
      if (error.msg.non_field_errors)
        // depends on the error message coming from redux state
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.email) alert.error(error.msg.email.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.successMessage) alert.success(message.successMessage);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
      if (message.errorMessage) alert.error(message.errorMessage);
    }
  }

  render() {
    console.log(this.props);
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  // called any time the store is updated
  // state is the store state
  error: state.error_reducer,
  message: state.message_reducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
