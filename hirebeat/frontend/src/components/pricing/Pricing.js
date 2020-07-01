import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";

const commonDetail1 = "Unlimited mock-interview practice";
const commonDetail2 = "Request AI analysis on your video interviews";
const commonDetail3 = "Request professional feedback from HR";
const commonDetail4 = "Review & replay interview performance";

const basicDetail1 = "Save up to 5 video interviews";

const premiumDetail1 = "Unlimited save your video interviews";
const premiumDetail2 = "Full Access to interview question bank";

const BasicPrice = () => {
  return <p style={{ color: "#FF6B00", fontSize: 50 }}>$Free</p>;
};

const PremiumPrice = () => {
  return (
    <div className="d-flex">
      <p
        className="strikethrough"
        style={{
          color: "#FF6B00",
          fontSize: 50,
        }}
      >
        $19.99
      </p>
      <p style={{ color: "black", fontSize: 30, paddingTop: 20 }}>/mo</p>
    </div>
  );
};

const BasicDetails = () => {
  return (
    <div style={{ marginBottom: "34px" }}>
      <p className="text-muted">{commonDetail1}</p>
      <p className="text-muted">{commonDetail2}</p>
      <p className="text-muted">{commonDetail3}</p>
      <p className="text-muted">{commonDetail4}</p>
      <p className="text-muted">{basicDetail1}</p>
    </div>
  );
};

const PremiumDetails = () => {
  return (
    <div>
      <p className="text-muted">{commonDetail1}</p>
      <p className="text-muted">{commonDetail2}</p>
      <p className="text-muted">{commonDetail3}</p>
      <p className="text-muted">{commonDetail4}</p>
      <p className="text-muted">{premiumDetail1}</p>
      <p className="text-muted">{premiumDetail2}</p>
    </div>
  );
};

const PriceButton = (props) => {
  // onTap, textDisplayed
  return (
    <button
      style={{
        WebkitBorderRadius: "20px",
        background: "#FF6B00",
        border: "none",
        width: "80%",
        height: 40,
        marginTop: 50,
        padding: 0, // key to center text in button
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontSize: "1vw",
          fontWeight: "bold",
          marginBottom: 0,
          color: "white",
        }}
      >
        {props.textDisplayed}
      </p>
    </button>
  );
};

const PriceCard = (props) => {
  var message = props.first ? "Default Plan" : "Upgrade successfully";
  const basic = () => {
    props.createMessage({ successMessage: message });
  };
  const upgrade = () => {
    props.handleUpgrade();
    props.createMessage({ successMessage: message });
  };
  var basicSrc = "https://hirebeat-assets.s3.amazonaws.com/free.png";
  var premiumSrc = "https://hirebeat-assets.s3.amazonaws.com/premium.png";
  return (
    <div
      className="col-4"
      style={{
        borderRadius: "8px",
        marginLeft: props.first ? "10%" : 0,
        marginRight: props.first ? 0 : "10%",
        backgroundColor: "white",
        height: 650,
      }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div style={{ marginBottom: 20, marginTop: 20 }}>
          <img
            src={props.first ? basicSrc : premiumSrc}
            width="80"
            height="80"
          />
        </div>
        <h2>{props.first ? "Basic" : "Premium"}</h2>
        <p className="text-muted">
          {props.first ? "Practice interview" : "Prepare for job seaking"}
        </p>
        {props.first ? <BasicPrice /> : <PremiumPrice />}
        {props.first ? <BasicDetails /> : <PremiumDetails />}
        {props.first ? (
          <PriceButton onTap={basic} textDisplayed={"Try this plan"} />
        ) : (
          <PriceButton onTap={upgrade} textDisplayed={"Upgrade for free"} />
        )}
      </div>
    </div>
  );
};

class Pricing extends Component {
  makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      save_limit: 1000,
    };
  };

  handleUpgrade = () => {
    var profile = this.makeProfile();
    this.props.updateProfile(profile);
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          padding: 0,
          backgroundColor: "#FAFAFB",
          height: 900,
        }}
      >
        <div className="pricing-bg">
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: 50 }}
          >
            <h1 style={{ color: "white", marginBottom: 50 }}>
              Transparent & Simple Pricing
            </h1>
            <h4 style={{ color: "white", marginBottom: 50 }}>
              Get interview analytics with HireBeat plan. Try Premium for free.
            </h4>
            <div
              className="row d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <PriceCard
                first={true}
                createMessage={this.props.createMessage}
              />
              <PriceCard
                first={false}
                createMessage={this.props.createMessage}
                handleUpgrade={this.handleUpgrade}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { updateProfile, createMessage })(
  Pricing
);
