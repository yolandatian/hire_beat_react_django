import React from "react";
import SocialLogin from "react-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";

class SocialButton extends React.Component {
  renderProviderButton = () => {
    switch (this.props.type) {
      case "facebook":
        return (
          <FacebookLoginButton
            onClick={this.props.triggerLogin}
            {...this.props}
          >
            {this.props.children}
          </FacebookLoginButton>
        );
      case "google":
        return (
          <GoogleLoginButton onClick={this.props.triggerLogin} {...this.props}>
            {this.props.children}
          </GoogleLoginButton>
        );
      case "linkedin":
        return (
          <LinkedInLoginButton
            onClick={this.props.triggerLogin}
            {...this.props}
          >
            {this.props.children}
          </LinkedInLoginButton>
        );
      default:
      // Do thing
    }
  };

  render() {
    return <div>{this.renderProviderButton()}</div>;
  }
}

export default SocialLogin(SocialButton);
