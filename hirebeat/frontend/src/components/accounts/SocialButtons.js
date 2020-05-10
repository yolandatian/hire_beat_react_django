import React, { Component } from "react";
import SocialButton from "./SocialButton";

export class SocialButtons extends Component {
  handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <SocialButton
          provider="facebook"
          appId="248485152931865"
          onLoginSuccess={this.props.handleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}
          type="facebook"
        >
          Login with Facebook
        </SocialButton>
        <SocialButton
          provider="facebook"
          appId="248485152931865"
          onLoginSuccess={this.props.handleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}
          type="google"
        >
          Login with Google
        </SocialButton>
        <SocialButton
          provider="facebook"
          appId="248485152931865"
          onLoginSuccess={this.propshandleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}
          type="linkedin"
        >
          Login with Linkedin
        </SocialButton>
      </div>
    );
  }
}

export default SocialButtons;
