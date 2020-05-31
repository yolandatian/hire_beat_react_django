import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  renderUserLinks = () => {
    const { user } = this.props.auth;
    return (
      <ul className="navbar-nav ml-auto align-items-center">
        <li className="nav-item active">
          <Link to="/practice" className="nav-link">
            <h3>Practice</h3>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            <h3>Dashboard</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <h3>Pricing</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <h3>Company</h3>
          </Link>
        </li>
        <li className="nav-item">
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-primary"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <strong>{user ? `  ${user.username}  ` : ""}</strong>
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <button
                onClick={this.props.logout}
                className="nav-link btn btn-danger btn-sm text-light"
              >
                Logout
              </button>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </div>
          </div>
        </li>
      </ul>
    );
  };

  renderGuestLinks = () => {
    return (
      <ul className="navbar-nav mr-auto align-items-center">
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            <h3>Register</h3>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/login" className="nav-link">
            <h3>Login</h3>
          </Link>
        </li>
      </ul>
    );
  };

  renderReviewerLinks = () => {
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Logout
          </button>
        </li>
      </ul>
    );
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container align-items-center">
          <a className="navbar-brand" href="/">
            HireBeat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {isAuthenticated
              ? user.groups[0] == "reviewers"
                ? this.renderReviewerLinks()
                : this.renderUserLinks()
              : this.renderGuestLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, { logout })(Header);
